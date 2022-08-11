import create from 'zustand'
import createVanilla from 'zustand/vanilla'
import { persist } from 'zustand/middleware'

import { createAuthSlice, AuthSlice } from './auth'
import { createDataSlice, DataSlice } from './data'

export type BoundSlices = AuthSlice & DataSlice
export const store = createVanilla<BoundSlices>()(
  persist(
    (...a) => ({
      ...createAuthSlice(...a),
      ...createDataSlice(...a),
    }),
    { name: 'store' }
  )
)

const useStore = create(store)
export default useStore
