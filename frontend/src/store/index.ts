import create from 'zustand'

import { createAuthSlice, AuthSlice } from './auth'
import { createHackathonSlice, HackathonSlice } from './hackathon'

type BoundSlices = AuthSlice & HackathonSlice
export const useStore = create<BoundSlices>()((...a) => ({
  ...createAuthSlice(...a),
  ...createHackathonSlice(...a),
}))
