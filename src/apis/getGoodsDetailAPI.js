import httpInstance from  "@/utils/http.js"

// 取得麵包導航的資料
export function getGoodsDetailAPI(id) {
  return httpInstance({
    url: '/api/product/getProductDetail',
    params: {
      id
    }
  })
}
