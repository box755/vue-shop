//createRouter: 創建router實例對象
//CreateWebHistory: 創建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'

//導入一級路由
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'

//導入二級路由組件
import Home from '@/views/home/index.vue'
import Category from '@/views/category/index.vue'
import SubCategory from '@/views/subCategory/index.vue'
import Detail from '@/views/details/index.vue'



const router = createRouter({
  //使用createWebHistory讓前端路由不用加上#
  history: createWebHistory(import.meta.env.BASE_URL),

  // 配置前端路由，每個path會導到哪個組件
  routes: [
    {
      // 一級路由
      path: '/',
      component: Layout,
      // 二級路由
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'category/:id',
          component: Category
        },
        {
          path: 'category/sub/:id',
          component: SubCategory
        },
        {
          path: 'detail/:id',
          component: Detail
        }
      ]
    },

    {
      path: '/login',
      component: Login
    }


  ],
  // scrollBehavior是一個對象中被宣告的函數，定義切換頁面時的滑動行為
  scrollBehavior: () => ({ top: 0 })
})

export default router
