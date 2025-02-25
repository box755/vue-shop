import httpInstance from  "@/utils/http.js"

export function getSubCategoryAPI(data) {
  return httpInstance({
    url: '/category/goods/temporary',
    // 使用post
    method: 'POST', data

  })
}
