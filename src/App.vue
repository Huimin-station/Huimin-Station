<script setup>

</script>

<template>
  <div class="totle">
    <RouterView></RouterView> 
    <audio autoplay controls src="@assets/1.mp3"></audio>
    
  </div>
</template>

<style scoped>
.totle{
  background-color: rgb(173, 10, 10);
}
audio{
  position: fixed;
  bottom: 0;

}
</style>
