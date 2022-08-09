import axios from '@utils/auth'

interface LoginCredentials {
  username: string
  password: string
  password_repeat: string
}

interface TokenResponse {
  access: string
  refresh: string
}

export const login = async (credentials: LoginCredentials) => {
  const { data } = await axios.post<TokenResponse>('auth/login/', credentials)
  return {
    accessToken: data.access,
    refreshToken: data.refresh,
  }
}

export const refresh = async (refreshToken: string) => {
  const { data } = await axios.post<TokenResponse>('auth/login/refresh/', { refresh: refreshToken })
  return {
    accessToken: data.access,
    refreshToken,
  }
}

export const me = async () => {
  const { data } = await axios.get<TokenResponse>('/auth/me/')
  return data
}
