<script setup>
import {ref, watch} from 'vue'
const count = ref(0)
const setCount = ()=>{
  count.value++
}


// watch(count,(newValue, oldValue)=>{
//   console.log(newValue, oldValue)
// })


const count2 = ref(0)
const setCount2 = ()=>{
  count2.value++
}

watch([count, count2],([newCountValue, newCount2Value], [oldCountValue, oldCount2Value])=>{
  console.log("變化了", [newCountValue, newCount2Value], [oldCountValue, oldCount2Value])
}, {immediate: true})

</script>

<template>
  <div>
    <button @click="setCount()">{{count}}</button>
    <button @click="setCount2()">{{count2}}</button>
  </div>

</template>
