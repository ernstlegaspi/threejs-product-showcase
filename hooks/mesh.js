import { create } from "zustand"

export const useMeshStore = create(set => ({
	mesh: undefined,
	setMesh: mesh => set(() => ({
		mesh
	}))
}))
