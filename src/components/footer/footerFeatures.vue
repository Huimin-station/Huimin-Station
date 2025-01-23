<script setup>

</script>

<template>
  <div class="features">
    <el-row :gutter="0">
      <el-col :span="8">
        <div class="item">
          <img src="@/assets/logo.svg" alt="">
          专业的技术团队
        </div>
      </el-col>
      <el-col :span="8">
        <div class="item">
          <img src="@/assets/logo.svg" alt="">
          便捷的网络订阅
        </div>
      </el-col>
      <el-col :span="8">
        <div class="item">
          <img src="@/assets/logo.svg" alt="">
          精致的装修工艺
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="less">
.features {
  height: 7rem;
  margin: 1rem 0;
  .el-row {
    height: inherit;

    .el-col {
      height: inherit;

      .item {
        height: inherit;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: black;
        font-weight: bold;

        img {
          height: 5rem;
          border-radius: 50%;
        }
      }
    }
  }

}
</style>
