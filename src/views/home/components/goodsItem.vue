<!-- 封装good item-->
<script setup>

// 傳入good，對象
defineProps({
  good: {
    type: Object,
    default: () => {}
  }
})

</script>

<template>
  <RouterLink :to="`/detail/${good.id}`" class="goods-item">
    <img v-lazy-img="good.picture" src="" alt="" />
    <p class="name ellipsis">{{ good.name }}</p>
    <p class="desc ellipsis">{{ good.desc }}</p>
    <p class="price">&yen;{{ good.price }}</p>
  </RouterLink>
</template>

<style scoped lang="scss">
.goods-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  }

  img {
    width: 160px;
    height: 160px;
    object-fit: cover;
  }

  p {
    padding-top: 10px;
  }

  .name {
    font-size: 16px;
    white-space: nowrap; // 確保文字不換行
    overflow: hidden; // 超出部分隱藏
    text-overflow: ellipsis; // 超出時顯示省略號
    max-width: 100%; // 限制寬度不超出容器
  }

  .desc {
    color: #999;
    height: 29px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  .price {
    color: $priceColor;
    font-size: 20px;
  }
}
</style>
