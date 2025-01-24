<template>
    <div>
      <!-- 子组件 -->
      <SIngSong v-show="isChildVisible" />
  
      <!-- 控制子组件显示的按钮 -->
      <div class="right rotating">
        <a @click="toggleChildVisibility" v-for="n in 4" :key="n">
          {{ n }}
        </a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import SIngSong from '../others/SIngSong.vue';
  
  const isChildVisible = ref(true); // 控制子组件显示的变量
  
  const toggleChildVisibility = () => {
    isChildVisible.value = !isChildVisible.value; // 切换子组件的显示状态
  };



  
  </script>
  
  <style scoped>
  .right {
    position: fixed;
    width: 80px;
    height: 80px;
    background: url("@/assets/Fu.jpg") no-repeat;
    background-size: contain;
    bottom: 100px;
    right: 20px;
    transition: all 0.3s;
    border-radius: 40px;
    overflow: hidden;
  }
  
  .right:hover {
    height: 320px;
    background-image: none;
    background-color: red;
    transition: all 0.3s;
  }

  .rotating:after {
  content: '';
  animation: reverse-spin 5s linear infinite;
  animation-play-state: paused;
}

.rotating:hover:after {
  animation-play-state: running;
}
.rotating:after {
  content: '';
  animation: reverse-spin 5s linear infinite;
  animation-play-state: paused;
}

.rotating:hover:after {
  animation-play-state: running;
}
  
  a {
    display: block;
    width: 100%;
    height: 80px;
    transition: all 0.3s;
    text-align: center;
    line-height: 80px;
  }
  
  a:hover {
    background-color: yellow;
  }

.rotating {
  animation: spin 5s linear infinite; /* 持续顺时针旋转，周期为 5 秒 */
}
/* 鼠标悬停时暂停动画 */
.rotating:hover {
 animation: none;


}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
  </style>