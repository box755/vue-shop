//createRouter: 創建router實例對象
//CreateWebHistory: 創建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'

//導入一級路由
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'

//導入二級路由
import Home from '@/views/home/index.vue'
import Category from '@/views/category/index.vue'



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
        }
      ]
    },

    {
      path: '/login',
      component: Login
    }


  ],
})

export default router
