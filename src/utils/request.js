import axios from 'axios'
import store from '../store'
// import { message } from 'ant-design-vue'

// const config = require('../../config/index.js')

const durationTime = 3 * 1000

const whiteList = [
  'http://172.16.213.30:8082/auth/login'
  //  'http://192.168.1.222:8082/auth/login'
]; // 请求白名单

// process.env.NODE_ENV == 'production' ? config.build.env.Base_url : config.dev.env.Base_url

// 创建axios实例
let service = axios.create({
  baseURL: 'http://172.16.213.30:8082',
  //  baseURL: 'http://192.168.1.222:8082',
  // 请求超时时间
  timeout: 50000,
  // 跨域是否需要凭证
  withCredentials: false
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    if(whiteList.indexOf(config.url) < 0) {
      // 白名单以外的URL都需要token凭证进行请求权
      config.headers = {
        'Authorization': store.getters.token
      }
      // 跨域需要凭证
      config.withCredentials = true
    } 
    // 设置自定义请求头
    config.header = { 
      'X-Requested-With': 'XMLHttpRequest'
    }
    // 最大重定向数
    config.maxRedirects = 0
    return config
  },
  error => {
    // 请求错误
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    // console.log('正确响应：', response.status)
    return response
  },
  error => {
    // console.log('错误响应：', error)
    return new Promise((resolve, reject) => {
      // console.log('响应：', error)
      if (error.response == null) {
        // message.warning('网络异常', 'error', durationTime)
        reject(error)
      } else {
        switch (error.response.status) {
          case 500: // 处理500状态码
            let res = error.response.data
            if (res.code === 500) {
              // 运行时异常
              // message.warning(`运行时异常：${res.code} ${res.message}`, 'error', durationTime)
            } else {
              // 业务异常
              // message.warning(`业务异常: ${res.code} ${res.message}`, 'error', durationTime)
            }
            reject(error)
            break
          case 403:
            // message.warning('无权访问', 'warning', durationTime)
            break
          case 302:
            // window.location.assign(error.response.Location)
        }
      }
    })
  }
)

export default service
