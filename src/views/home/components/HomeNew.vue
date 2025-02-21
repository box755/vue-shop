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
          <img :src="item.picture" alt="" />
          <p class="name">{{ item.name }}</p>
          <p class="price">&yen;{{ item.price }}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
</template>


<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>


