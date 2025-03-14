import request from  "@/utils/http.js"

export function findTopCategoryAPI(id) {
  return request({
    url: '/api/categories/category',
    params: {
      id
    }
  })
}
