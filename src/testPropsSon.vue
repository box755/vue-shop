<script setup>

  //子組件，用來宣告組件成員，用法為對象裡面傳入成員名稱，冒號，成員類別
  defineProps({
    message: String,
    count: Number
  })

</script>

<template>
  <div class="son">
    <h1>I'm son component.My message is {{message}} count is {{count}}.</h1>
  </div>

</template>

<style scoped>

</style>
