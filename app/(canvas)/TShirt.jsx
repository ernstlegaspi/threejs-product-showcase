import { useColorStore } from "@/hooks/changeColor"
import { useMeshStore } from "@/hooks/mesh"
import { useFrame, useLoader } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { MathUtils } from "three"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader"

export default function TShirt() {
	const { setMesh } = useMeshStore()
	const { meshColor } = useColorStore()
	const gltf = useLoader(GLTFLoader, "/models/tshirt/tshirt.glb")
	const ref = useRef()

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

	return <primitive ref={ref} object={gltf.scene} />
}
