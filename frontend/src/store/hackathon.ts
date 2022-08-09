import { StateCreator } from 'zustand'

export interface HackathonSlice {
  fishes: number
  addFish: () => void
}

export const createHackathonSlice: StateCreator<HackathonSlice> = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
})
