import httpInstance from  "@/utils/http.js"

export function getNewGoodsAPI() {
  return httpInstance({
    url: '/home/new'
  })
}

export function getHotGoodsAPI() {
  return httpInstance({
    url: '/home/hot'
  })
}
