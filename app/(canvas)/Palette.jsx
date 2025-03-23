import { useState } from "react"
import { useColorStore } from "@/hooks/changeColor"

export default function Palette() {
	const Color = ({ bgColor, borderColor, color }) => {
		const [isHovered, setIsHovered] = useState(false)
		const { setMeshColor } = useColorStore()

		return <>
			<div
				onClick={() => setMeshColor(color)}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				className={`${borderColor} transition-all flex-center w-[20px] h-[20px] rounded-full border-2 pointer`}
			>
			<div className={`${bgColor} ${isHovered ? "w-[20px] h-[20px]" : "w-[12px] h-[12px]"} transition-all rounded-full`}></div>
		</div>
		</>
	}

	return <div className="absolute z-1 bottom-0 w h-[80px]">
		<p className="text-white text-center font-bold">Change Box Color</p>
		<div className="h-2" />

		<div className="flex-center gap-2">
			<Color bgColor="bg-white" borderColor="border-white" color="ffffff" />
			<Color bgColor="bg-red-300" borderColor="border-red-300" color="ffa2a2" />
			<Color bgColor="bg-blue-300" borderColor="border-blue-300" color="8ec5ff" />
			<Color bgColor="bg-green-300" borderColor="border-green-300" color="7bf1a8" />
		</div>
	</div>
}