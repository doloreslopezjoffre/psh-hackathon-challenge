import { StateCreator } from 'zustand'

export interface AuthSlice {
  token: string | null
  setToken: (token: string) => void
  clearToken: () => void
}

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  token: null,
  setToken: (token: string) => set((_state) => ({ token })),
  clearToken: () => set((_state) => ({ token: null })),
  // addBear: () => set((state) => ({ bears: state.bears + 1 })),
})
