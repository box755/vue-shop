<script setup>
  import {onMounted} from "vue";
  import HomePanel from './HomePanel.vue'
  import { getNewGoodsAPI } from '@/apis/homeAPIs.js'
  import { ref } from 'vue'
  const newList = ref([])
  const getNewList = async () => {
    const res = await getNewGoodsAPI()
    console.log(res)
    newList.value = res.result
  }

  onMounted(() => {
    getNewList()
  })
</script>

<template>
<!--  導入子組件，渲染後，插入父組件內容-->
  <HomePanel title="新品上架" subTitle="最新出爐 品質靠普">
    <ul class="goods-list">
      <li v-for="item in newList" :key="item.id">
        <RouterLink :to="`/detail/${item.id}`">
          <img v-lazy-img="item.picture" src="" alt="" />
          <p class="name">{{ item.name }}</p>
          <p class="price">&yen;{{ item.price }}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
</template>


<style scoped lang='scss'>
.goods-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-content: center;

  li {
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    }

    img {
      width: 100%;
      height: auto;
      border-bottom: 1px solid #eee;
    }

    p {
      font-size: 18px;
      padding: 10px 15px;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .name {
      font-weight: bold;
      color: #333;
    }

    .desc {
      color: #999;
      font-size: 18px;
    }

    .price {
      color: #e60012;
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>


