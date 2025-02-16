<script setup>
  import {ref} from 'vue'
  //父組件導入子組件
  import son from './testPropsSon.vue'
  const count = ref(0)

  const setValue = (n) =>{
    count.value += n
  }

</script>

<template>
  <div class="father">
    <h1>I'm father component.</h1>
  </div>
<!-- 調用子組件，用法為 子組件成員名稱=值，使用父組件的響應變數要家冒號-->
  <son :count="count" message="Message father gave."></son>

  <button @click="setValue(10)">Hit me to increase son's count.</button>

</template>

<style scoped>

</style>
