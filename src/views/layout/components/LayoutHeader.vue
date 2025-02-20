<script setup>
//使用pinia，此時的index已經儲存資料
import { toRef } from 'vue';
import {useCategoryStore} from "@/stores/category.js";
const store = useCategoryStore()
const categoryList = toRef(store, 'categoryList'); // 保持響應性
/**
 *優化前，會多次調用category API
 * //等待獲取promise
 * const categoryList = ref([])
 * const getCategories = async() => {
 * const data  = await getCategoryAPI()
 *  // console.log(data.result)
 *  categoryList.value = data.result
 * }
 */


</script>

<template>
  <header class='app-header'>
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/">假髮王</RouterLink>
      </h1>
      <ul class="app-header-nav">
        <li class="home">
          <RouterLink to="/">首頁</RouterLink>
        </li>
<!--        for loop 渲染類別-->
        <li class="home" v-for="category in categoryList" :key="category.id">
<!--          RouterLink設定二級組件的路徑-->
          <RouterLink to="/">{{ category.name }}</RouterLink>
        </li>
      </ul>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜尋">
      </div>
<!--待新增頭部購物車-->
    </div>
  </header>
</template>


<style scoped lang='scss'>
.app-header {
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 10px 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }

  .logo {
    width: 180px;

    a {
      display: block;
      height: 80px;
      width: 100%;
      text-indent: -9999px;
      background: url('@/assets/images/logo.png') no-repeat center / contain;
    }
  }

  .app-header-nav {
    display: flex;
    gap: 30px;
    padding-left: 20px;
    position: relative;
    z-index: 998;

    li {
      text-align: center;

      a {
        font-size: 16px;
        line-height: 40px;
        font-weight: 500;
        color: #333;
        transition: color 0.3s ease, border-bottom 0.3s ease;

        &:hover {
          color: $xtxColor;
          border-bottom: 2px solid $xtxColor;
        }
      }

      .active {
        color: $xtxColor;
        border-bottom: 2px solid $xtxColor;
      }
    }
  }

  .search {
    width: 200px;
    height: 36px;
    display: flex;
    align-items: center;
    border-radius: 18px;
    background: #f5f5f5;
    padding: 0 12px;
    transition: background 0.3s ease;

    &:hover {
      background: #ebebeb;
    }

    .icon-search {
      font-size: 18px;
      color: #999;
    }

    input {
      width: 100%;
      border: none;
      outline: none;
      background: transparent;
      padding-left: 8px;
      color: #333;
      font-size: 14px;

      &::placeholder {
        color: #bbb;
      }
    }
  }

  .cart {
    position: relative;
    width: 50px;

    .curr {
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: #f8f8f8;
      transition: background 0.3s ease;

      &:hover {
        background: #f0f0f0;
      }

      .icon-cart {
        font-size: 22px;
        color: #555;
      }

      em {
        font-style: normal;
        position: absolute;
        top: -4px;
        right: -4px;
        padding: 3px 7px;
        font-size: 12px;
        font-weight: bold;
        background: $helpColor;
        color: #fff;
        border-radius: 50%;
        font-family: Arial, sans-serif;
      }
    }
  }
}

</style>
