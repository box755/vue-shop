import httpInstance from  "@/utils/http.js"

export function getSubCategoryAPI(data) {
  return httpInstance({
    url: 'api/categories/product',
    // 使用post
    method: 'POST', data
  })
}
