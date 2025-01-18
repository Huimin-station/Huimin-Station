<script setup>
import { ref } from 'vue'

const activeIndex = ref('/')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<template>
  <div class="menu">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      :router="true"
      :ellipsis="false"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#fff"
    >
      <el-menu-item index="/">网站首页</el-menu-item>
      <span>|</span>
      <el-menu-item index="/">公司简介</el-menu-item>
      <span>|</span>
      <el-menu-item index="/">成功案例</el-menu-item>
      <span>|</span>
      <el-menu-item index="/">新闻中心</el-menu-item>
      <span>|</span>
      <el-menu-item index="/">联系我们</el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped lang="less">
.menu{
  height:inherit;
  color: white;
  span{
    display: flex;
    align-items: center;
  }
}
:deep(.el-menu--horizontal.el-menu) {
  border-bottom: none;
  height:inherit;
}
:deep(.el-menu--horizontal>.el-menu-item.is-active){
  border-bottom: none;
}
</style>
