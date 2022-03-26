import axios from 'axios'
import qs from 'qs'
import Config from '../config'

const IsForm = false
const addHeaders = () => {
  return {
    'Content-Type': IsForm ? 'application/x-www-form-urlencoded' : ' application/json'
  }
}

const request = axios.create({
  baseURL: Config.baseUrl,
  timeout: 10000,
  headers: {
    ...addHeaders()
  }
})

// 请求拦截
request.interceptors.request.use((config) => {
  return config
}, (error) => Promise.reject(error))

// 响应拦截
request.interceptors.response.use(
  (response) => {
    const { code, msg } = response.data
    if (code === 200) {
      return response.data
    }
    return Promise.reject(new Error(msg))
  },
  (error) => Promise.reject(error)
)

export const GET = (url, data) => {
  return request({
    url,
    params: data
  })
}

export const POST = (url, data) => {
  return request({
    url,
    method: 'POST',
    data: IsForm ? qs.stringify(data) : data
  })
}

export default request
