<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const input = ref('')
</script>

<template>
  <div class="search">
    <div class="search-box">
      <div class="left">
        <h3>为您量身定做，装修新体验</h3>
        <h5>看房，设计，定价&nbsp;&nbsp;一键搞定</h5>
      </div>
      <div class="right">
        <el-input
          v-model="input"
          style="width: 240px"
          placeholder="请输入关键字"
          :suffix-icon="Search" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.search {
  width: 100%;
  height: 5rem;
  background: #2e5098;
  display: flex;
  align-items: center;

  .search-box {
    width: 80%;
    margin: auto;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      line-height: 1.6rem;
    }
  }
}
</style>
