import { useColorStore } from "@/hooks/changeColor"
import { useMeshStore } from "@/hooks/mesh"
import { useFrame, useLoader } from "@react-three/fiber"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react"
import { MathUtils } from "three"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader"

export default function TShirt() {
	const { setMesh } = useMeshStore()
	const { meshColor } = useColorStore()
	const gltf = useLoader(GLTFLoader, "/models/tshirt/tshirt.glb")
	const ref = useRef()
	const description = document.getElementById("description")

	const onClick = () => {
		gsap.to(description, {
			opacity: 1,
			duration: 1,
			ease: "power1.out"
		})
	}

	const pointerEnter = () => {
		document.body.style.cursor = "pointer"
	}

	const pointerLeave = () => {
		document.body.style.cursor = "default"
	}

	useEffect(() => {
		if(!gltf || !ref.current) return

		setMesh(gltf.scene)

		gltf.scene.traverse(child => {
			if(child.isMesh) {
				child.material.color.set(`#${meshColor}`)
			}
		})

		gltf.scene.scale.set(.07, .07, .07)
	}, [gltf, meshColor])

	useFrame(({ pointer }) => {
		if(!ref.current) return

		gltf.scene.position.set(-0.05, -1, 0)

		ref.current.rotation.y = MathUtils.lerp(
			ref.current.rotation.y,
			pointer.x * Math.PI * .2,
			.03
		)

		ref.current.rotation.x = MathUtils.lerp(
			ref.current.rotation.x,
			pointer.y * -Math.PI * .2,
			.03
		)
	})

	return <group>
		<mesh onClick={onClick} onPointerEnter={pointerEnter} onPointerLeave={pointerLeave} scale={[1, 1, 1]}>
			<boxGeometry />
			<meshStandardMaterial
				transparent={true}
				opacity={0}
			/>
		</mesh>
		<primitive ref={ref} object={gltf.scene} />
	</group>
}
