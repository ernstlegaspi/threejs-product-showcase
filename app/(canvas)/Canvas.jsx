"use client"

import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import TShirt from "./TShirt"
import Palette from "./Palette"
import ColorPicker from "./ColorPicker"

export default function CanvasPage() {
	return <div className="w h relative overflow-hidden">
		<ColorPicker />
		<Palette />

		<Canvas className="relative z-0">
			<color args={[0, 0, 0]} attach="background" />
			
			<PerspectiveCamera makeDefault position={[0, 0, 5]} />

			<TShirt />

			<Environment preset="sunset" />

			<OrbitControls
				makeDefault
				enableDamping
				enablePan={false}
				dampingFactor={0.03}
				minDistance={2}
				maxDistance={10}
			/>
		</Canvas>
	</div>
}
