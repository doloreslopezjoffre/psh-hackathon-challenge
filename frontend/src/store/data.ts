import { StateCreator } from 'zustand'

import { listHackathons, getHackathon } from '@services/data'

import { Hackathon } from '@utils/types/data'
import { BoundSlices } from './index'

export interface DataSlice {
  hackathons: Hackathon[]
  hackathon: Hackathon | null
  fetchHackathons: () => void
  fetchHackathon: (id: string) => void
}

export const createDataSlice: StateCreator<
  BoundSlices,
  [['zustand/persist', unknown]],
  [],
  DataSlice
> = (set) => ({
  hackathons: [],
  hackathon: null,
  fetchHackathons: async () => {
    const hackathons: Hackathon[] = await listHackathons()
    await set({ hackathons })
  },
  fetchHackathon: async (id: string) => {
    const hackathon: Hackathon = await getHackathon(id)
    await set({ hackathon })
  },
})
