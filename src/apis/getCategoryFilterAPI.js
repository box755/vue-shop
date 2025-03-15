import httpInstance from  "@/utils/http.js"

// 取得麵包導航的資料
export function getCategoryFilterAPI(id) {
  return httpInstance({
    url: '/api/categories/sub/filter',
    params: {
      id
    }
  })
}
