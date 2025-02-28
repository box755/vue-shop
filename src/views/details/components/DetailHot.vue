<script setup>
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router"
import { getHotGoodsAPI } from '@/apis/getHotGoodsAPI.js'

const props = defineProps({
  hotType: {
    type:Number,
    default: 1
  }
})

const route = useRoute()
const hotList = ref([])
const getHostList = async () => {
  const data = await getHotGoodsAPI({
    id: route.params.id,
    type: props.type
  })
  hotList.value = data.result
  // console.log(hotList)
}

const TYPEMAP = {
  1: "24小時熱門",
  2: "週熱門"
}

const title = computed(() => {
  // 響應式的屬性，當 props.hotType 變更時，title 會自動更新
  return TYPEMAP[props.hotType]
})

onMounted(() => {
  getHostList()
})
</script>


<template>
  <div class="goods-hot">
    <h3>{{ title }}</h3>
    <!-- 商品区块 -->
    <RouterLink to="/" class="goods-item" v-for="item in hotList" :key="item">
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;200.00</p>
    </RouterLink>
  </div>
</template>


<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }
}
</style>
