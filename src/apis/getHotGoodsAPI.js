import httpInstance from  "@/utils/http.js"

export function getHotGoodsAPI({id, type, limit = 3}) {
  return httpInstance({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit
    }
  })
}
