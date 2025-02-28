<script setup>
import { getCategoryFilterAPI } from "@/apis/getCategoryFilterAPI.js"
import { getSubCategoryAPI } from '@/apis/getSubCategoryAPI.js'
import { onMounted, ref } from "vue";
import { useRoute } from 'vue-router'
import GoodsItem from "@/views/home/components/goodsItem.vue";

const route = useRoute()

// 獲得麵包資料
const categoryFilterData = ref({})
const getCategoryFilterData = async () => {
  const res = await getCategoryFilterAPI(route.params.id)
  categoryFilterData.value = res.result
}


const subCategoryList = ref({})

// 基礎查詢參數
const reqData = ref(
  {
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
  }
)

// 發送基礎查詢參數，獲得sub category 商品
const getSubCategory = async () => {
  const res = await getSubCategoryAPI(reqData.value)
  subCategoryList.value = res.result.items
}

const isDisabled = ref(false)
// 加載資料
const load = async ()=>{
  // console.log("加載資料")
  const oldSubCategoryList = subCategoryList.value
  reqData.value.page ++
  await getSubCategory()

  // 若API已經沒東西傳了，disabled停止加載
  if(subCategoryList.value.length === 0){
    isDisabled.value = true
  }
  // 拼接新舊資料
  subCategoryList.value = [...oldSubCategoryList, ...subCategoryList.value]
}



onMounted(()=>{
  getCategoryFilterData()
  getSubCategory()
})

// 當reqData被更改後，重新發送請求
const whenTab = () => {
  // 重置加載請求參數
  reqData.value.page = 1
  isDisabled.value = false
  getSubCategory()

}

</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${ categoryFilterData.parentId}` }">{{ categoryFilterData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ categoryFilterData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
<!--      控制reqData.sortField的賦值-->
      <el-tabs v-model="reqData.sortField" @tab-change="whenTab">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人氣" name="orderNum"></el-tab-pane>
        <el-tab-pane label="評論最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>

      <!--        增加無線加載，禁用加載屬性-->
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="isDisabled">
        <!-- 商品列表-->
        <GoodsItem v-for="good in subCategoryList" :good="good" :key="good.id" />
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 20px 20px;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 15px;
  margin-top: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.sub-container {
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05); // 添加輕微陰影增加深度
  border-radius: 12px; // 圓角更柔和
  transition: all 0.3s ease; // 動畫過渡效果

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    gap: 20px; // 使用 gap 替代 margin-right，更靈活


    img {
      width: 160px;
      height: 160px;
      object-fit: cover; // 圖片自適應裁剪
      border-radius: 8px; // 圖片圓角
      margin-bottom: 12px; // 與下方文字分隔
    }

    p {
      margin: 0; // 重置 p 標籤默認間距
      padding-top: 8px;
    }

    .name {
      font-size: 16px;
      font-weight: 500; // 加粗提升標題感
      color: #333; // 深色文字提高可讀性
      white-space: nowrap; // 防止換行
      overflow: hidden; // 超長部分隱藏
      text-overflow: ellipsis; // 超長顯示省略號
    }

    .desc {
      color: #999;
      font-size: 14px;
      height: 29px;
      line-height: 1.5; // 提高行高增加舒適感
      overflow: hidden; // 控制溢出
      text-overflow: ellipsis; // 省略號處理
    }

    .price {
      color: $priceColor;
      font-size: 20px;
      font-weight: bold; // 價格加粗突出
      margin-top: 5px;
      &::before {
        content: "￥"; // 添加人民幣符號
        font-size: 14px; // 符號稍小
      }
    }
  }

  .pagination-container {
    margin-top: 25px;
    display: flex;
    justify-content: center;
    padding: 10px 0;

    // 可選：美化分頁樣式（需配合 Element Plus 自定義）
    :deep(.el-pagination) {
      .el-pager li {
        border-radius: 6px;
        transition: all 0.3s ease;
        &:hover {
          background-color: $xtxColor;
          color: #fff;
        }
      }
      .el-pager li.active {
        background-color: $xtxColor;
        color: #fff;
      }
    }
  }
}

// 美化 el-tabs（需使用 deep 選擇器）
:deep(.el-tabs) {
  .el-tabs__item {
    font-size: 16px;
    padding: 0 20px;
    color: #666;
    &.is-active {
      color: $xtxColor;
      font-weight: 500;
    }
  }
  .el-tabs__active-bar {
    background-color: $xtxColor;
    height: 3px; // 加粗活躍標誌
    border-radius: 2px;
  }
}
</style>
