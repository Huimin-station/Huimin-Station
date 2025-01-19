<script setup>

import HeaderMenu from '@/components/header/headerMenu.vue'
</script>

<template>
  <div class="container">
    <div class="top">
      <div class="edition">
        <div class="logo">
          <img src="@/assets/logo.svg" alt="logo">
        </div>
        <header-menu></header-menu>
      </div>
    </div>
    <div class="box">
      <el-carousel height="50vh" indicator-position="none" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 text="2xl" justify="center">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  width: 100%;
  position: relative;

  .top {
    width: 100%;
    height: 5rem;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;

    .edition {
      width: 80%;
      height: 100%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo {
        height: 100%;
        display: flex;
        align-items: center;

        img {
          height: 80%;
        }
      }
    }
  }

  .el-carousel__item h3 {
    display: flex;
    justify-content: center;
    color: #475669;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}

::v-deep(.el-carousel__arrow) {
  background: none;
  font-size: 3rem;
  top: 60%;

  &:hover {
    background-color: transparent;
  }

  .el-carousel__arrow--left {
    left: 20%;
  }

  .el-carousel__arrow--right {
    right: 20%;
  }
}
</style>
