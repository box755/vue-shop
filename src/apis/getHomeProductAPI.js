import httpInstance from  "@/utils/http.js"

export function getHomeProductAPI() {
  return httpInstance({
    url: '/home/goods '
  })
}
