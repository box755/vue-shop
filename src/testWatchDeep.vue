<script setup>
  import {ref, watch} from 'vue'


  const count = ref({name:'count', age: 18})
  const setCount = ()=>{
    count.value.age++
  }

  const setName = ()=>{
    count.value.name += "test"
  }


  // //watch with deep
  // watch(count,()=>{
  //   console.log("count產生變化", count.value.age)
  // }, {deep: true})

  //watch without depp
  //第一個回調函數返回 count.value.age 的當前值。當返回的值發生變化時，watch 會觸發第二個回調函數。
  watch(()=>count.value.age,()=>{
    console.log("count產生變化", count.value.age)
  })


</script>

<template>
  <div>
    <button @click="setCount()">{{count.age}}</button>
    <button @click="setName()">{{count.name}}</button>
  </div>
</template>

<style scoped>

</style>
