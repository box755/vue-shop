import httpInstance from  "@/utils/http.js"

export function getCategoryFilter(id) {
  return httpInstance({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}
