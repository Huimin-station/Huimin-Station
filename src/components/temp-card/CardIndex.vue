<script setup>
import { ref } from 'vue'
import SubCard from './SubCard.vue'
import NewsItem from '@/components/temp-news/NewsItem.vue'
import QuestionItem from '@/components/temp-question/QuestionItem.vue'

defineProps({
  containerHeight: {
    type: String,
    default: '550px'
  },
  cardHeight: {
    type: String,
    default: '400px'
  },
  newsData: {
    type: Array,
    default: () => []
  },
  questionData: {
    type: Array,
    default: () => []
  }
})

const newsData = ref([
  {
    id: 1,
    img: 'https://th.bing.com/th?id=OSK.54d04b041c62f307adfeaea85067a79e&w=46&h=46&c=11&rs=1&qlt=80&o=6&dpr=1.5&pid=SANGAM',
    title: '新闻1',
    introduction: '新闻介绍1'
  },
  {
    id: 2,
    img: 'https://th.bing.com/th?id=OSK.54d04b041c62f307adfeaea85067a79e&w=46&h=46&c=11&rs=1&qlt=80&o=6&dpr=1.5&pid=SANGAM',
    title: '新闻2',
    introduction: '新闻介绍2'
  },
  {
    id: 3,
    img: 'https://th.bing.com/th?id=OSK.54d04b041c62f307adfeaea85067a79e&w=46&h=46&c=11&rs=1&qlt=80&o=6&dpr=1.5&pid=SANGAM',
    title: '新闻3',
    introduction: '新闻介绍3'
  },
  
])

const questionData = ref([
  {
    id: 1,
    img: 'https://www.szhuasi.com/uppic/allimg/181207/1-1Q20G05946259.png',
    title: '常见问题1',
    introduction: '常见问题介绍1',
    url: 'http://www.baidu.com'
  },
  {
    id: 2,
    img: 'https://www.szhuasi.com/uppic/allimg/181207/1-1Q20G05946259.png',
    title: '常见问题2',
    introduction: '常见问题介绍2',
    url: 'http://www.baidu.com'
  },
  {
    id: 3,
    img: 'https://www.szhuasi.com/uppic/allimg/181207/1-1Q20G05946259.png',
    title: '常见问题3',
    introduction: '常见问题介绍3',
    url: 'http://www.baidu.com'
  },
  {
    id: 4,
    img: 'https://www.szhuasi.com/uppic/allimg/181207/1-1Q20G05946259.png',
    title: '常见问题4',
    introduction: '常见问题介绍4',
    url: 'http://www.baidu.com'
  },
])


</script>

<template>
<div class="container" :style="{ height: containerHeight }">
  <div class="card" :style="{ height: cardHeight }">
    <sub-card title="行业新闻" subTitle="Trade news" width="55%">
      <news-item v-for="(item,index) in newsData" :key="index" :data="item"></news-item>
    </sub-card>

    <sub-card title="常见问题" subTitle="Question" width="40%">
      <template #default>
      <question-item v-for="(item,index) in questionData" :key="index" :data="item" :index="index"></question-item>
      </template>
    </sub-card>

  </div>

</div>
</template>

<style>
:root {
    --base-border: 1px solid #fbff09;
    --base-color: #ccff00;
    --base-hover-color: #f5f5f5;

    --container-padding: 0 18%;
    --container-bgcolor: #c70303;

    --card-padding: 2% 3%;
    --card-bgcolor: #ae0000;
    --card-border: var(--base-border);
    --card-shadow: 0px 12px 32px 4px rgba(0, 0, 0, .04), 0px 8px 20px rgba(0, 0, 0, .08);
    --card-gap: 5%;
    --card-left-grid: 60%; /* 左侧宽度 */
    --card-right-grid: calc(100% - var(--card-left-grid) - var(--card-gap)); /* 右侧宽度 */

    /* 主标题 */
    --card-title-font-size: 24px;
    --card-title-font-weight: 700;

    /* 副标题 */
    --card-sub-title-font-size: 20px;
    --card-sub-title-font-weight: var(--card-title-font-weight);
    --card-sub-title-color: var(--base-color);
    --card-sub-title-margin: 0 .4vw;

    /* 分割线 */
    --card-divider-margin: 10px auto;
    --card-divider-width: 98%;
    --card-divider-height: 4px;
    --card-divider-bgcolor: var(--base-color);
    --card-sub-divider-bgcolor: #409EFF;
    --card-sub-divider-width: 60px;
    --card-sub-divider-height: 100%;
  }
</style>

<style scoped lang="less">

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--container-padding);
    width: 100%;
    background: var(--container-bgcolor);
    box-sizing: border-box;
  }

  .card {
    display: flex;
    justify-content: space-between;
    padding: var(--card-padding);
    width: 100%;
    background-color: var(--card-bgcolor);
    border: var(--card-border);
    box-shadow: var(--card-shadow);
    box-sizing: border-box;
  }

  .content {
    height: 100%;
    box-sizing: border-box;
  }


</style>