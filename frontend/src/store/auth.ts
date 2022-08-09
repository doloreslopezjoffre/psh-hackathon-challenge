import { StateCreator } from 'zustand'
import { BoundSlices } from './index'

export interface AuthSlice {
  token: string | null
  refresh: string | null
  setTokens: (token: string, refresh: string) => void
  logout: () => void
}

export const createAuthSlice: StateCreator<
  BoundSlices,
  [['zustand/persist', unknown]],
  [],
  AuthSlice
> = (set) => ({
  token: null,
  refresh: null,
  setTokens: (token: string, refresh: string) => set(() => ({ token, refresh })),
  logout: () => set(() => ({ token: null, refresh: null })),
})
