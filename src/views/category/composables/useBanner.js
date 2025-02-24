// 使用組合函數封装函數
import { getBanner } from '@/apis/getBannerAPI.js'
import {ref} from "vue";



export function useBanner(){
  const bannerList = ref([])

  // 獲得類別banner
  const getBannerList = async () => {
    const res = await getBanner({distributionSiteId: '2'})
    bannerList.value = res.result
  }

  return{getBannerList, bannerList}
}
