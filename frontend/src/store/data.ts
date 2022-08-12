import { StateCreator } from 'zustand'

import { listHackathons, getHackathon, listDevelopers } from '@services/data'

import { Hackathon, Participant } from '@utils/types/data'
import { BoundSlices } from './index'

export interface DataSlice {
  hackathons: Hackathon[]
  hackathon: Hackathon | null
  developers: Participant[]
  fetchHackathons: () => void
  fetchHackathon: (id: string) => void
  fetchDevelopers: () => void
}

export const createDataSlice: StateCreator<
  BoundSlices,
  [['zustand/persist', unknown]],
  [],
  DataSlice
> = (set) => ({
  hackathons: [],
  hackathon: null,
  developers: [],
  fetchHackathons: async () => {
    const hackathons: Hackathon[] = await listHackathons()
    await set({ hackathons })
  },
  fetchHackathon: async (id: string) => {
    const hackathon: Hackathon = await getHackathon(id)
    await set({ hackathon })
  },
  fetchDevelopers: async () => {
    const developers: Participant[] = await listDevelopers()
    await set({ developers })
  },
})
