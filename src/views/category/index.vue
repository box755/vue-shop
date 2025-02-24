<!--二級路由分類頁面-->
<script setup>
import {onMounted} from 'vue'
import {onBeforeRouteUpdate, useRoute} from 'vue-router'
import goodsItem from "@/views/home/components/goodsItem.vue";
import { useBanner } from '@/views/category/composables/useBanner.js'
import { usetCategory } from "@/views/category/composables/useCategory.js";

//可顯示當前路徑
const route = useRoute()


// 使用banner組合函數
const {getBannerList, bannerList} = useBanner()
// 使用category組合函數
const {getcategoryTop, categoryTop} = usetCategory()

// // 當網址改變後，重新發送請求
// watch(() => route.params.id, (newId) => {
//   getcategoryTop(newId)
// })
// 改用 onBeforeRouterUpdate

onMounted(() => {
  // 當前路徑的參數作為參數
  getcategoryTop(route.params.id)
  getBannerList()
})


onBeforeRouteUpdate((to)=>{
  // 測試路由變化的參數，to參數是新的頁面的路由網址
  // console.log("Router changed to ", to.params.id, ".")

  getcategoryTop(to.params.id)
  console.log(to.params.id)
  // 當路由（網址）產生變化時，重新發送請求

})
</script>


<template>

  <div class="top-category">
    <div class="container m-top-20">

      <div class="bread-container">
        <!--    使用element plus套件-->
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
          <el-breadcrumb-item>{{ categoryTop.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!--    category banner-->
      <div class="category-banner">
        <el-carousel height="560px">
          <!--       loop bannerList-->
          <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img :src="item.imgUrl" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="sub-list">
        <h3>全部分類</h3>
        <ul>
          <li v-for="i in categoryTop.children" :key="i.id">
            <RouterLink :to="`/category/sub/${i.id}`">
              <img :src="i.picture" />
              <p>{{ i.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="ref-goods" v-for="item in categoryTop.children" :key="item.id">
        <div class="head">
          <h3>- {{ item.name }}-</h3>
        </div>
        <div class="body">
          <goodsItem v-for="good in item.goods" :good="good" :key="good.id" class="goods-item"/>
        </div>
      </div>
    </div>
  </div>


</template>


<style scoped lang="scss"> // 定義全局變數
$primaryColor: #27ba9b; // 主色調（可根據品牌調整）



// 商品項樣式
.goods-item {
  border-radius: $borderRadius;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); // 添加輕微陰影
  display: block;
  width: 220px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease; // 平滑過渡

  &:hover {
    transform: translateY(-5px); // 懸停時略微上移
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); // 增強陰影
  }

  img {
    width: 160px;
    height: 160px;
    object-fit: cover; // 圖片適應容器
    border-radius: 4px; // 圖片輕微圓角
  }

  p {
    padding-top: 8px;
    margin: 0;
  }

  .name {
    font-size: 16px;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; // 超出部分顯示省略號
  }

  .desc {
    color: #999;
    font-size: 14px;
    height: 20px;
    margin: 4px 0;
  }

  .price {
    color: $primaryColor;
    font-size: 18px;
    font-weight: bold;
  }
}

// 主容器樣式
.top-category {
  background: #f5f5f5; // 淺灰背景，增加層次感
  padding-bottom: 40px;

  h3 {
    font-size: 24px;
    color: #444;
    font-weight: 500;
    text-align: center;
    line-height: 80px;
    margin: 0;
  }

  .container {
    max-width: 1240px;
    margin: 0 auto;
  }

  // 麵包屑導航
  .bread-container {
    padding: 20px 20px;
    background: #fff;
    border-radius: $borderRadius;
    margin-bottom: 15px;
    margin-top: 15px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  }

  // 輪播圖
  .category-banner {
    width: 100%;
    max-width: 1240px;
    height: 500px;
    margin: 0 auto 40px;
    border-radius: $borderRadius;
    overflow: hidden; // 防止圖片溢出

    .el-carousel {
      height: 500px;

      img {
        width: 100%;
        height: 500px;
        object-fit: cover; // 圖片適應容器
        transition: transform 0.5s ease; // 縮放動畫
      }

      &:hover img {
        transform: scale(1.05); // 懸停時輕微放大
      }
    }
  }

  // 子分類列表
  .sub-list {
    margin-top: 20px;
    background: #fff;
    border-radius: $borderRadius;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 20px; // 使用 gap 替代 padding 控制間距
      padding: 0;
      justify-content: center;

      li {
        width: 150px;
        height: 150px;
        background: #fff;
        border-radius: $borderRadius;
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          text-decoration: none;
          color: #666;

          img {
            width: 90px;
            height: 90px;
            object-fit: contain;
            margin-bottom: 8px;
          }

          p {
            font-size: 14px;
            line-height: 1.2;
            margin: 0;
          }

          &:hover {
            color: $hoverColor;
          }
        }
      }
    }
  }

  // 商品推薦區
  .ref-goods {
    background: #fff;
    margin-top: 30px;
    padding: 20px;
    border-radius: $borderRadius;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

    .head {
      position: relative;
      border-bottom: 1px solid #eee;
      padding-bottom: 10px;

      h3 {
        font-size: 22px;
        color: $primaryColor;
        line-height: 1.5;
      }
    }

    .body {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
      padding: 20px 0;
    }
  }
}
</style>
