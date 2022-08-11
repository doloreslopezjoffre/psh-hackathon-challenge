import { StateCreator } from 'zustand'

import { listHackathons } from '@services/data'

import { Hackathon } from '@utils/types/data'
import { BoundSlices } from './index'

export interface DataSlice {
  hackathons: Hackathon[]
  fetchHackathons: () => void
}

export const createDataSlice: StateCreator<
  BoundSlices,
  [['zustand/persist', unknown]],
  [],
  DataSlice
> = (set) => ({
  hackathons: [],
  fetchHackathons: async () => {
    const hackathons: Hackathon[] = await listHackathons()
    await set({ hackathons })
  },
})
