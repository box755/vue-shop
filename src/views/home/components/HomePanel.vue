<script setup>

defineProps({
  title: {
    type: String,
    default: ''
  },
  subTitle: {
    type: String,
    default: ''
  }
})

</script>


<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <!-- 主標題附標題 -->
        <h3>
          {{ title }}<small>{{ subTitle }}</small>
        </h3>
      </div>
      <!-- 主內容區域 -->
<!--      slot是插槽，讓用以顯示父組件內容-->
      <slot></slot>
    </div>
  </div>
</template>


<style scoped lang='scss'>
.home-panel {
  background-color: #fff;

  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;

    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;

      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
</style>
