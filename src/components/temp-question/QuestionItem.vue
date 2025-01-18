<script setup>
import { defineProps, onMounted} from 'vue'

defineProps({
  data: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

</script>

<template>

  <div class="question-item-a" v-if="data!= null && index===0">
    <a :href="data.url" style="display: flex;">
      <div class="question-item-image"><img style="width: 100%;height: 100%" :src="data.img"></div>

      <div class="question-item-content">
        <div class="question-item-title">{{ data.title }}</div>
        <div class="question-item-introduction">{{ data.introduction }}</div>
      </div>
    </a>
  </div>

  <div class="question-item-b" v-else-if="data != null">
    <a :href="data.url"><li>{{ data.title }}</li></a>
  </div>

</template>

<style>

:root {
  --question-item-height: 150px;
}

</style>

<style scoped lang="less">
a {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #000;
  padding: 10px;
  box-sizing: border-box;
}

.question-item-a {
  display: flex;
  height: var(--question-item-height);
}

.question-item-b {
  display: flex;
  height: calc(var(--question-item-height) / 3);
  line-height: calc(var(--question-item-height) / 3 - 20px);
  width: 100%;

  a {
    display: block;
  }
}

.question-item-a:hover,.question-item-b:hover {
  background-color: var(--base-hover-color);
}

.question-item-image {
  margin-right: 10px;
  width: 150px;
  border: var(--base-border);
}

.question-item-title {
  font-weight: 700;
}

.question-item-introduction {
  margin-top: 10px;
  color: var(--base-color);
}
</style>