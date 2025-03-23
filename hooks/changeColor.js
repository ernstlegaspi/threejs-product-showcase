import { create } from "zustand"

export const useColorStore = create(set => ({
	meshColor: "ffffff",
	setMeshColor: meshColor => set(() => ({
		meshColor
	}))
}))
