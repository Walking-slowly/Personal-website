import axios from 'axios'

// 创建axios实例 config
const http = axios.create({
  // 超时
  timeout: 4000,
  // 配置合并后,baseUrl会添加到url前面，除非url是绝对路径
  baseURL: 'http://localhost:8081'
})

// http请求拦截器
http.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// http响应拦截器
http.interceptors.response.use(data => {
  return data
}, error => {
  return Promise.reject(error)
})
export default http
