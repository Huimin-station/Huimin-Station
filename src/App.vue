<script setup>
import LeftSeting from './components/Leftsetint/LeftSeting.vue';
</script>

<template>
  <div class="totle">
    <RouterView></RouterView> 

    <LeftSeting></LeftSeting>
 
    
  </div>
</template>

<style scoped>
.totle{
  background-color: rgb(173, 10, 10);
}

</style>
