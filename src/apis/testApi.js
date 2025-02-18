import httpInstance from  "@/utils/http.js"

export function getData(){
  //httpInstance是一個方法，參數是一個對象，接收對象後會把對象的url和 http中所定義的base url拼接，並且回傳一個promise對象
  return httpInstance({
    url: 'home/category/head'
  })
}

// 用法：
// import {getData} from '@/apis/testApi'
// promise對象有一個then方法
// console.log(getData().then(res => console.log(res)))

