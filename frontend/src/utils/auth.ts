import axios from 'axios'
import { store } from '@store/index'
import { toast } from 'react-toastify'

export const baseURL = `http://localhost:8000/api`

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
    const { token } = store.getState()
    return {
      ...config,
      headers: {
        ...config.headers,
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    }
  },
  (error) => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    toast.error(error.response.data?.detail ?? error.message)
    return Promise.reject(error)
  }
)

export default axiosInstance
