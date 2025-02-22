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
  <RouterLink to="/" class="goods-item">
    <img v-lazy-img="good.picture" src="" alt="" />
    <p class="name ellipsis">{{ good.name }}</p>
    <p class="desc ellipsis">{{ good.desc }}</p>
    <p class="price">&yen;{{ good.price }}</p>
  </RouterLink>
</template>

<style scoped lang="scss">

</style>
