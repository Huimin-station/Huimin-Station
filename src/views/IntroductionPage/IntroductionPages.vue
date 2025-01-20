<script setup>

import HeaderTop from '@/components/header/headerTop.vue'
import onlyheader from '@/components/header/onlyheader.vue';
import footerIndex from '@/components/footer/footerIndex.vue';
import IntroductionPeoples from '@/components/Introduction/IntroductionPeoples.vue';
import AllNum from '@/components/Introduction/AllNum.vue';
import BoderSet from '@/components/others/BoderSet.vue';
</script>

<template>
  <header class="container">
    <div class="box">
      <div class="top">
        <header-top></header-top>
      </div>
    </div>
    <onlyheader></onlyheader>
    <!-- <div class="x"></div>占位盒子 -->
    <AllNum></AllNum>
    <BoderSet></BoderSet>
    <IntroductionPeoples></IntroductionPeoples>
    <BoderSet></BoderSet>
    <AllNum></AllNum>
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
