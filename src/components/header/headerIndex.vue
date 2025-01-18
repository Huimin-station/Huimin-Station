<script setup>

import HeaderTop from '@/components/header/headerTop.vue'
import HeaderBanner from '@/components/header/headerBanner.vue'
import HeaderSearch from '@/components/header/headerSearch.vue'
</script>

<template>
  <header class="container">
    <div class="box">
      <div class="top">
        <header-top></header-top>
      </div>
    </div>
    <header-banner></header-banner>
    <header-search></header-search>
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
</style>
