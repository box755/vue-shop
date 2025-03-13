import httpInstance from  "@/utils/http.js"

// 預設參數是空對象
export function getBanner(params = {}) {
  // 從參數解構出distributionSiteId成員，若沒有則預設1
  const {distributionSiteId = 1} = params
  return httpInstance({
    url: '/api/banners/getBanners',
    // 請求地址有一個distributionSiteId參數
    // GET /home/banner?distributionSiteId=123
    params: {
      distributionSiteId
    }
  })
}
