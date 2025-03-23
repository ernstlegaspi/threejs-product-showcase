import { useState } from "react"

export default function Palette() {
	// red = ffa2a2
	// blue = 8ec5ff
	// green = 7bf1a8
	
	const Color = ({ bgColor, borderColor }) => {
		const [isHovered, setIsHovered] = useState(false)

		return <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`${borderColor} transition-all flex-center w-[20px] h-[20px] rounded-full border-2 pointer`}>
			<div className={`${bgColor} ${isHovered ? "w-[20px] h-[20px]" : "w-[12px] h-[12px]"} transition-all rounded-full`}></div>
		</div>
	}

	return <div className="absolute z-1 bottom-0 w h-[80px]">
		<p className="text-white text-center font-bold">Change Box Color</p>
		<div className="h-2" />

		<div className="flex-center gap-2">
			<Color bgColor="bg-white" borderColor="border-white" />
			<Color bgColor="bg-red-300" borderColor="border-red-300" />
			<Color bgColor="bg-blue-300" borderColor="border-blue-300" />
			<Color bgColor="bg-green-300" borderColor="border-green-300" />
		</div>
	</div>
}