import { StateCreator } from 'zustand'

export interface HackathonSlice {
  hackathons: string[]
  //addFish: () => void
}

export const createHackathonSlice: StateCreator<HackathonSlice> = (set) => ({
  hackathons: [],
  // addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
})
