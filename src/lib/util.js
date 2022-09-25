/**
 * @description axios配置管理
 */

 import axios from "axios"
 
 let instance = axios.create({
     baseURL: '/api',
     timeout: 100000,
    //  headers: {
    //      get: {
    //          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    //      },
    //      post: {
    //          'Content-Type': 'application/x-www-form-urlencoded'
    //      }
    //  }
 })
 
 instance.interceptors.request.use(config => {
     return config
 })
 
 instance.interceptors.response.use(data => {
     return data.data
 })
 
 export default instance