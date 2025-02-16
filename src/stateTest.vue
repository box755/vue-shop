<script setup>
  import {reactive} from "vue";
  import {ref} from 'vue';
  const state = reactive({value: 0})

  //使用reactive將對象轉成動態對象
  const setCount = () =>{
    state.value++
  }

  //使用ref將primitive type轉成動態
  const statePrim = ref(0)
  const setPrim = () =>{
    statePrim.value++
    //需要用value
  }

</script>

<template>
  <div>
    <button @click="setCount()" style="height: 100px; width: 100px; font-size: 30px" >{{state.value}}</button>
    <button @click="setPrim()" style="height: 100px; width: 100px; font-size: 30px">{{statePrim}}</button>
  </div>
</template>

