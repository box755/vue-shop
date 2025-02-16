<script setup>
  import son from './testDefineEmitsSon.vue'
  import {ref} from "vue";
  const logGetMessage = (message) => {
    console.log("Father gets message: ", message)
  }
  const changeDiv = (message) => {
    fatherReactive.value += message
  }

  const fatherReactive = ref("")
</script>

<template>
  <div>
    <h1>Im father.</h1>
    <!--設定子類別傳出的物件，要丟給當前組件的哪個函數-->
    <div>{{fatherReactive}}</div>
    <son @getMessage="logGetMessage"></son>
    <son @getMessage="changeDiv"></son>
  </div>

</template>

<style scoped>

</style>
