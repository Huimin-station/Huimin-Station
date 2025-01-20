<script setup>

</script>

<template>
    <div class="goods" v-for="n in 8" :key="n">
        <div class="good">
            <img src="../assets/logo.svg" alt="">
            <p>我是</p>
        </div>
    </div>
</template>

<style scoped>
.good{
    margin: 20px 0;
    width: 220px;
    height: 240px;
    background-color: white;
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, .3);

}
.good img{
    width: 100%;
    height:100px ;
}
</style>