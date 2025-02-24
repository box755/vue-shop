<script setup>
import {onMounted} from "vue";
  import {ref} from "vue";
  import {getBanner} from "@/apis/getBannerAPI.js";
  const bannerList = ref([])
  const getBannerList = async() => {
    const data  = await getBanner()
    // console.log(data)
    bannerList.value = data.result
  }

  onMounted(() => {
    getBannerList()
  })

</script>



<template>
  <div class="home-banner">
    <el-carousel height="560px">
<!--       loop bannerList-->
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 1000px;
    transition: transform 0.5s ease;

  }

}
</style>
