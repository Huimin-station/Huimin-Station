<script setup>

</script>

<template>
    <div class="goods" v-for="n in 8" :key="n">
        <div class="good">
            <img src="../assets/微信图片_20250114202357.jpg" alt="">
            <p>我是</p>
        </div>
    </div>
</template>

<style scoped>
.good{
    margin: 20px 0;
    width: 220px;
    height: 240px;
    background-color: gray;
}
.good img{
    width: 100%;
    height:100px ;
}
</style>