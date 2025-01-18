<script setup>
import CardDivider from './CardDivider.vue'
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  },
  width: {
    type: String,
    default: '100%'
  }
})

</script>

<template>
  <div class="sub-card" :style="{ width: width }">
      <div class="header">
        <div class="title">{{ title }}</div>
        <div class="sub-title">{{ subTitle }}</div>
      </div>
      <card-divider></card-divider>
        
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>

  .sub-card {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  .header {
    display: flex;
    align-items: center;
  }

  .title {
    font-size: var(--card-title-font-size);
    font-weight: var(--card-title-font-weight);
  }

  .sub-title {
    margin: var(--card-sub-title-margin);
    font-size: var(--card-sub-title-font-size);
    font-weight: var(--card-sub-title-font-weight);
    color: var(--card-sub-title-color);
  }
</style>