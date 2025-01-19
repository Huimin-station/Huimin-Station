<script setup>

import HeaderTop from '@/components/header/headerTop.vue'
import onlyheader from '@/components/header/onlyheader.vue';
import footerIndex from '@/components/footer/footerIndex.vue';
</script>

<template>
  <header class="container">
    <div class="box">
      <div class="top">
        <header-top></header-top>
      </div>
    </div>
    <onlyheader></onlyheader>
    <div class="x"></div><!--占位盒子-->
    <div class="star">
        <h1>暂时没有内容</h1>
    </div>
    <footer-index></footer-index>
  </header>
</template>

<style lang="less" scoped>
.container {
  width: 100%;

  .box {
    width: 100%;
    background: #323232;

    .top {
      width: 100%;
      height: 2rem;
      margin: auto;
    }
  }
}
.x{
    width: 100%;
    height: 80px;
}
.star{
    text-align: center;
    width: 600px;
    line-height: 600px;
}
</style>
