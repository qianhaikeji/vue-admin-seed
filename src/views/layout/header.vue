<template>
  <div class="zy-header">
    <div class="title">钻业珠宝管理后台</div>
  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style>
.zy-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  background-color: #20A0FF;
  z-index: 100;
}

.zy-header .title {
  padding-left: 20px;
  text-align: left;
  line-height: 40px;
  font-size: 18px;
  color: white;
}
</style>