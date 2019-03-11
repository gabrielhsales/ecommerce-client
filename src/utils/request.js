import axios from 'axios'
import store from '@/store'
import { getToken, getRefreshToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: 'http://localhost:3333/v1/',
  timeout: 1000 * 60 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (store.getters.isUserLoggedIn) {
      config.headers['Authorization'] = getToken()
      config.headers['refresh_token'] = getRefreshToken()
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => response,

  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
