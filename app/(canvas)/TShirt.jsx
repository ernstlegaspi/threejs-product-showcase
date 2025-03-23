import { useColorStore } from "@/hooks/changeColor"
import { useMeshStore } from "@/hooks/mesh"
import { useFrame, useLoader } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { MathUtils } from "three"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader"

export default function TShirt() {
	const { setMesh } = useMeshStore()
	const { meshColor } = useColorStore()
	const gltf = useLoader(GLTFLoader, "/models/tshirt/scene.gltf")
	const ref = useRef()

	useEffect(() => {
		if(!gltf || !ref.current) return

		// setMesh(gltf.scene)
		setMesh(ref.current)

		gltf.scene.scale.set(0.5, 0.5, 0.5)
	}, [gltf])

	useFrame(({ pointer }) => {
		if(!ref.current) return

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

	return <mesh ref={ref}>
		<boxGeometry />
		<meshStandardMaterial color={`#${meshColor}`} />
	</mesh>
}
