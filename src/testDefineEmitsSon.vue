<script setup>
  //defineEmits是函數，傳入一個陣列其中包含這個子類別要傳去的物件的名稱
  //這個函數回傳一個函數，存到emit中
  const emit = defineEmits(['getMessage'])

  const sendMessage = () => {
    //呼叫emit函數，emit的第一個參數是子類別對外傳出的物件名稱，第二個是要傳出去的東西，每呼叫一次emit就會對外傳出一次
    emit('getMessage', 'Message son sent.')
  }
</script>

<template>
  <div>
    <h2>Im son.</h2>
<!--按下按鈕會呼叫emit，傳出訊息-->
    <button @click="sendMessage">Send</button>
  </div>


</template>

<style scoped>

</style>
