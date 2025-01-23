<script setup>

import HeaderTop from '@/components/header/headerTop.vue'
import onlyheader from '@/components/header/onlyheader.vue';
import footerIndex from '@/components/footer/footerIndex.vue';
import NewYearVadio from '@/components/Vadionews/NewYearVadio.vue';
</script>

<template>
  <header class="container">
    <div class="box">
      <div class="top">
        <header-top></header-top>
      </div>
    </div>
    <onlyheader></onlyheader>
    <div class="x"></div>
    <!-- 占位盒子 -->
     <NewYearVadio></NewYearVadio>
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

</style>
