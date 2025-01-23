<script setup>
    import SearchHeader from './SearchHeader.vue';
</script>

<template>
    <div class="all">
        <SearchHeader></SearchHeader>
        <div class="bigbox">      
            <RouterView></RouterView>
        </div> 
    </div>
    
</template>

<style scoped>
.bigbox {
    width: 1000px;
    background-color: brown;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.all{
    display: inline-block;
    position: relative;
    left: 50%;
    margin-left: -500px;
}

</style>