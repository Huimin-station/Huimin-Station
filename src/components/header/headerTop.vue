<script setup>
</script>

<template>
  <div class="top-box">
    <el-row :gutter="0" align="middle" justify="space-between">
      <el-col :span="12">
        <router-link to="/">登录</router-link>
        <span>&nbsp;|&nbsp;</span>
        <router-link to="/">注册</router-link>
      </el-col>
      <el-col :span="12" class="right">
        <el-icon>
          <ShoppingCart />
        </el-icon>
        <span>&nbsp;|&nbsp;</span>
        <el-icon>
          <PhoneFilled />
        </el-icon>
        <span>400-188-884</span>
        &nbsp;&nbsp;&nbsp;
        <select>
          <option value="0">语言</option>
          <option value="1">中文</option>
          <option value="2">英语</option>
        </select>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.el-row{
  height: 100%;
  .el-col {
    display: flex;
  }
}

.top-box {
  width: 80%;
  height: 100%;
  margin: auto;
  * {
    text-decoration: none;
    color: white;
  }
  .right{
    display: flex;
    justify-content: flex-end;
  }
}

select {
  background: inherit;
  border: none;
  cursor: pointer;
  option{
    background: #323232;
  }
}
</style>
