<!-- 主頁面組件-->

<script setup>
// 導入組件
import LayoutNav from '@/views/layout/components/LayoutNavigation.vue'
import LayoutHeader from '@/views/layout/components/LayoutHeader.vue'
import LayoutFooter from '@/views/layout/components/LayoutFooter.vue'
import LayoutHeaderUI from "@/views/layout/components/LayoutHeaderUI.vue";
</script>

<template>
  <LayoutHeaderUI />

  <LayoutNav />

  <LayoutHeader />
<!--  二級路由出口-->
  <RouterView />
<!--  RouterView會根據當前網址，對應到的路由設定，顯示子組件-->
  <LayoutFooter />

</template>

<style scoped lang="scss">
</style>
