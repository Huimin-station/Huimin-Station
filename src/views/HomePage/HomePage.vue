<script setup>
import HeaderIndex from '@/components/header/headerIndex.vue'
import FooterIndex from '@/components/footer/footerIndex.vue'
import GoodBigBox from '@/components/Goods/GoodBigBox.vue';
import CardIndex from '@/components/temp-card/CardIndex.vue'

import BoderSet from '@/components/others/BoderSet.vue';
</script>

<template>
  <div>
    <header-index></header-index>
    <GoodBigBox></GoodBigBox>
    <BoderSet></BoderSet>
    <card-index ></card-index>
    <BoderSet></BoderSet>
    <footer-index></footer-index>
  </div>
</template>

<style scoped>

</style>