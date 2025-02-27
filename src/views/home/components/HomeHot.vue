<script setup>
import HomePanel from './HomePanel.vue'
import { getHotGoodsAPI } from '@/apis/homeAPIs.js'
import { ref, onMounted } from 'vue'

const hotList = ref([])

const getHotList = async () => {
  try {
    const res = await getHotGoodsAPI()
    hotList.value = res.result
  } catch (error) {
    console.error('獲取熱門商品失敗:', error)
  }
}

onMounted(() => {
  getHotList()
})
</script>

<template>
  <HomePanel title="人氣推薦" sub-title="人氣爆款 不容錯過">
    <ul class="goods-list">
      <li v-for="item in hotList" :key="item.id">
        <RouterLink :to="`/detail/${item.id}`">
          <img v-lazy-img="item.picture" src="" alt="商品圖片">
          <p class="name">{{ item.title }}</p>
          <p class="desc">{{ item.alt }}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
</template>

<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;
  gap: 15px;

  li {
    width: 306px;
    height: 406px;
    background: #f8f8f8;
    border-radius: 8px;
    overflow: hidden;
    transition: all .4s ease-in-out;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08); // 商品卡片陰影


    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    img {
      width: 100%;
      height: 306px;
      object-fit: cover;
      border-bottom: 2px solid #ddd;
    }

    p {
      font-size: 20px;
      padding-top: 10px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .desc {
      color: #666;
      font-size: 16px;
      margin-top: 5px;
    }
  }
}
</style>
