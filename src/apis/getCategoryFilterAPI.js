import httpInstance from  "@/utils/http.js"

export function getCategoryFilterAPI(id) {
  return httpInstance({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}
