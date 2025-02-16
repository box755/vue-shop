<script setup>
  import {ref} from 'vue'
  import {computed} from "vue";

  const list = ref([1, 2, 4, 3, 5, 6, 7])

  //computed函數會追蹤list.value，當list.value產生變化就執行回掉函數
  const filter = computed(()=>{
    //.filter函數遍歷陣列，每遍歷一個就呼叫回掉函數，當回掉函數回傳true就將物件家到新的list，最後回傳
    return list.value.filter((item) => item > 2)
  })

  const addNum = () =>{
    list.value.push(2, 4, 5, 1, 0, 8)
  }



</script>

<template>
  <div >
    原始：{{list}}
    回應：{{filter}}
    <button @click="addNum()">按我</button>
  </div>

</template>

<style scoped>

</style>
