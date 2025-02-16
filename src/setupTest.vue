<!--<script>-->

<!--  //對外暴露的成員，會自動暴露template，-->
<!--  //必須要暴露才可以讓外界辨識成vue組件-->
<!--  export  default {-->

<!--    //渲染時會先運行setup()-->
<!--    setup() {-->
<!--      const message = 'Hello World!';-->
<!--      function log(){-->
<!--        console.log(message);-->
<!--      }-->
<!--      console.log('setup');-->

<!--      return {message, log}-->
<!--    }-->
<!--  }-->
<!--</script>-->

<script setup>
const message = 'Hello World!'
function log(){
  console.log(message)
}
console.log('setup')
</script>

<template>
  <!-- index #if=app就好-->
  <div>
    {{message}}
    <button @click="log()">log</button>
  </div>
</template>



