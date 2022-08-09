import { StateCreator } from 'zustand'
import { BoundSlices } from './index'
export interface HackathonSlice {
  hackathons: string[]
  //addFish: () => void
}

export const createHackathonSlice: StateCreator<
  BoundSlices,
  [['zustand/persist', unknown]],
  [],
  HackathonSlice
> = (set) => ({
  hackathons: [],
  // addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
})
