import router from '@/router'
import { Message } from '@arco-design/web-vue'
import axios from 'axios'

// 创建 Axios 对象
/*
const $axios = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // 公共 URL
  timeout: import.meta.env.VITE_API_TIMEOUT // 超时时间
})
*/
const $axios = axios.create({
  baseURL: 'http://127.0.0.1:8081', // 公共 URL
  timeout: 3000 // 超时时间
})

// 配置请求拦截器
$axios.interceptors.request.use(
  (config) => {
    // 添加请求头
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  (error) => {
    console.error(error)
  }
)

// 配置响应拦截器
$axios.interceptors.response.use(
  (response) => {
    if (typeof response.data.data === 'string') {
      Message.success(response.data.data)
    }
    return response
  },
  (error) => {
    console.error(error)
    const { message } = error

    if (message.includes('Network Error')) {
      Message.error('系统网络异常')
    } else if (message.includes('timeout')) {
      Message.error('系统请求超时')
    } else if (error.response.status === 400) {
      Message.warning(error.response.data.message)
    } else if (error.response.status === 401) {
      const message = error.response.data.message === '用户未登录' ? '登录以继续' : '登录状态已过期'
      Message.warning(message)
      localStorage.removeItem('token')
      router.push('/login').then()
    } else if (error.response.status === 403) {
      Message.warning('您没有权限访问该页面')
      router.push('/').then()
    } else if (error.response.status === 500) {
      Message.error('系统未知异常')
    } /* else if (error.response.status === 404) {
      Message.error('page not found')
      router.push('/404').then()
    }*/
    return Promise.reject(error)
  }
)

export default $axios
