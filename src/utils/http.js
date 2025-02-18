//用來透過axios發送http請求

import axios from 'axios'


//axios.create方法需傳入一個對象，其中有請求的部分配置，然後回傳一個方法
const httpInstance = axios.create({
  //後端伺服器的基地址
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000
})

//設定攔截器
// axios請求攔截器
httpInstance.interceptors.request.use(config => {
  return config
}, e => Promise.reject(e))

// axios響應攔截器
httpInstance.interceptors.response.use(res => res.data, e => {
  return Promise.reject(e)
})

//導出，使用export export不能用{}
export default httpInstance



