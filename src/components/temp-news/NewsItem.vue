<script setup>

defineProps({
  data: {
    type: Object,
    required: true
  }
})

</script>

<template>

  <a href="" class="news-item" v-if="data != null">
    <div class="news-item-image">
      <img style="width: 100%;height: 100%" :src="data.img">
    </div>
    <div class="news-item-content">
      <div class="news-item-title">{{ data.title }}</div>
      <div class="news-item-introduction">{{ data.introduction }}</div>
    </div>
  </a>


</template>

<style scoped lang="less">

a {
  text-decoration: none;
  color: #000;
}

.news-item {
  display: flex;
  padding: 10px;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
}

.news-item:hover {
  background-color: #f5f5f5;
}

.news-item-image {
  display: block;
  margin-right: 20px;
  width: 140px;
  height: 100%;
}

.news-item-title {
  font-weight: 700;
}

.news-item-introduction {
  color: #909399;
}

</style>