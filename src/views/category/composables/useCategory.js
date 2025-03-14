import {findTopCategoryAPI} from "@/apis/findTopCategoryAPI.js";
import {ref} from "vue";

export function useCategory() {
  const categoryTop = ref({})

  // 獲得類別資料，包含名稱，children
  const getcategoryTop = async (id) => {
    const res = await findTopCategoryAPI(id)
    categoryTop.value = res.result
  }

  return {getcategoryTop, categoryTop}
}
