<script setup>

</script>

<template>

    <div class="friend">
        <div class="friends" v-for="n in 3" :key="n">
          <img src="@/assets/logo.svg" alt="">
          <div class="shadow"></div>
           <h1>HUIMINSTATION</h1>
        </div>
    </div>

</template>

<style lang="less" scoped>

.friend{
    margin-top: 50px;
    text-align: center;
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: space-around;
    .friends:hover{
      transition: all .3s;
      transform: scale(1.125);
      box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, .3);
    }
    .friends{
      width: 400px;
      height: 500px;
      background-color: white;
      border-radius: 20px;
      box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, .3);
      transition: all .5s;
      overflow: hidden;
     
      .img{
        width: 100%;

      }
      .shadow{
        width: 100%;
        height: 12px;
        background-color: rgba(0, 0, 0, .3);
      }
      
    }
    
}
</style>
