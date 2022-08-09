import instance from '@utils/auth'
import { store } from '@store/index'

export interface LoginCredentials {
  username: string
  password: string
}

interface TokenResponse {
  access: string
  refresh: string
}

export const login = async (credentials: LoginCredentials) => {
  const { data } = await instance.post<TokenResponse>('auth/login/', credentials)

  const { setTokens } = store.getState()
  setTokens(data.access, data.refresh)

  return {
    accessToken: data.access,
    refreshToken: data.refresh,
  }
}

export const refresh = async (refreshToken: string) => {
  const { data } = await instance.post<TokenResponse>('auth/login/refresh/', {
    refresh: refreshToken,
  })
  return {
    accessToken: data.access,
    refreshToken,
  }
}

export const me = async () => {
  const { data } = await instance.get('auth/me/')
  return data
}

export const logout = async () => {
  const { logout: storeLogout, refresh } = store.getState()
  await instance.post('auth/logout/', { refresh })
  storeLogout()
}
