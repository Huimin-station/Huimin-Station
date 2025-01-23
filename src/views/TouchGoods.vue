<script setup>

</script>

<template>
    <div class="goods" v-for="n in 8" :key="n">
        <div class="good">
            <img src="https://pic.616pic.com/photoone/00/07/77/6197673de73275697.jpg!/fw/1120" alt="">
            <p>教学</p>
        </div>
    </div>
</template>

<style scoped>
.good{
    margin: 20px 0;
    width: 220px;
    height: 240px;
    background-color: rosybrown;
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, .3);
}
.good:hover{
    border: 3px solid rgba(0, 0, 0, .3);
}
.good img{
    width: 100%;
    height:150px ;
}
</style>