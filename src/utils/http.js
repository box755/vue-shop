//用來透過axios發送http請求

import axios from 'axios'


//axios.create方法需傳入一個對象，其中有請求的部分配置，然後回傳一個方法
const httpInstance = axios.create({
  //後端伺服器的基地址
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000
})

//設定攔截器
// axios請求攔截器 用來在http請求發送前先對請求處理
// .use方法參數接收一個會回傳請求的回調方法，並且將請求丟進回掉方法後，回掉方法處理，再發出請求
httpInstance.interceptors.request.use(config => {
  return config
}, e => Promise.reject(e))
//reject拋出錯誤

// axios響應攔截器 用來在接收到http回應後對回應處理
// .use方法參數接收一個會回傳回應的回調方法，並且將回應丟進回掉方法後，回掉方法處理，並回傳資料。這裡的回掉方法是直接把http回應的請求體(res.data)回傳
httpInstance.interceptors.response.use(res => res.data, e => {
  return Promise.reject(e)
})

//導出，使用export export不能用{}
export default httpInstance



