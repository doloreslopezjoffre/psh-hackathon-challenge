import create from 'zustand'
import createVanilla from 'zustand/vanilla'
import { persist } from 'zustand/middleware'

import { createAuthSlice, AuthSlice } from './auth'
import { createHackathonSlice, HackathonSlice } from './hackathon'

export type BoundSlices = AuthSlice & HackathonSlice
export const store = createVanilla<BoundSlices>()(
  persist(
    (...a) => ({
      ...createAuthSlice(...a),
      ...createHackathonSlice(...a),
    }),
    { name: 'store' }
  )
)

const useStore = create(store)
export default useStore
