/**
 * 使用pinia，儲存調用API所回傳的資料，用以多次使用。
 */
import { ref} from 'vue'
import { defineStore } from 'pinia'
import {getCategoryAPI} from "@/apis/getCategoryAPI.js";


export const useCategoryStore = defineStore('category', () => {
  // 響應式變量，存類別的陣列
  const categoryList = ref([])

// 調用axios API
  const getCategories = async() => {
    // 回傳解析後的promise的resolve
    const data  = await getCategoryAPI()
    // console.log(data.result)
    categoryList.value = data.result
  }

  return { categoryList, getCategories }
})
