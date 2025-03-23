import { useColorStore } from "@/hooks/changeColor"
import { useColorPickerStore } from "@/hooks/colorPicker"
import { useState } from "react"
import { HexColorPicker } from "react-colorful"

export default function ColorPicker() {
	const [pickedColor] = useState("")
	const { setMeshColor } = useColorStore()
	const { isOpen } = useColorPickerStore()

	if(!isOpen) return null

	return <div className="absolute z-2 bottom-5 right-[41%] translate-x-[41%]">
		<HexColorPicker style={{ width: 150, height: 150 }} color={pickedColor} onChange={v => setMeshColor(v.replace("#", ""))} />
	</div>
}