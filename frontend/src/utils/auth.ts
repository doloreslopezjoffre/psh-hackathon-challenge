import axios from 'axios'
import shallow from 'zustand/shallow'
import { useStore } from '@store/index'

export const baseURL = `localhost:8000/api`

const apiConnection = {
  baseURL,
  timeout: 10000,
  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
}

const axiosInstance = axios.create(apiConnection)

axiosInstance.interceptors.request.use(
  (config) => {
    const token = useStore((state) => state.token, shallow)

    return {
      ...config,
      headers: {
        ...config.headers,
        ...(token ? { Authorization: token } : {}),
      },
    }
  },
  (err) => Promise.reject(err)
)

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // Do something with response error
    return Promise.reject(error)
  }
)

export const unsetAuthorizationHeader = () => {
  const clearToken = useStore((state) => state.clearToken)
  clearToken()
  delete axiosInstance.defaults.headers.common['Authorization']
}

export default axiosInstance
