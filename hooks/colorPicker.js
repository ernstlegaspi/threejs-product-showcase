import { create } from "zustand"

export const useColorPickerStore = create(set => ({
	isOpen: false,
	toggleColorPicker: () => set(state => ({
		isOpen: !state.isOpen
	}))
}))
