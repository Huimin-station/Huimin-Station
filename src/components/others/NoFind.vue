<script setup>

import { useRouter } from 'vue-router'; // 引入useRouter

const router = useRouter(); // 获取路由实例

const handleLogin = () => {

    router.push('/home/news'); // 跳转到/home/news[^7^][^11^]
  
};
</script>

<template>
    <div class="big">
    <h1>页面开发中...</h1>
        <div class="go" @click.prevent="handleLogin">返回</div>
    </div>


   
  
</template>

<style lang="less" scoped>
.big{
    background-color: red;
    height: 900px;
}
h1{
    text-align: center;
    font-size: 160px;
    padding-top: 30px;
}
.go{
    margin: auto;
    width: 200px;
    height: 200px;
    font-size: 50px;
    line-height: 200px;
    border-radius: 50%;
    background-color: rgb(250, 151, 151);
    text-align: center;
}
.go:hover{
    border: 2px solid yellow;
    
}

</style>