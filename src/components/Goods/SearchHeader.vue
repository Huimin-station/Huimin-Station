<script setup>

</script>

<template>
    <div class="header">
        <div class="top">
            <div class="left">
                <span>最新案例</span>
                New Case
            </div>
            <div class="right">
                <router-link to="/home/news">最新案例</router-link>
                <router-link to="/home/touch">项目教学</router-link>
                
            </div>
        </div>
            
        
        <div class="bottom">

        </div>
    </div>
</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
a{  
    color: black;
    box-sizing: border-box;
    text-decoration: none;
    transition: all .3s;
}
span{
    margin-left: 10px;
    font-size: large;
}
.header{

    line-height: 36px;
    width: 1000px;
    height: 40px;
    background-color: brown;
}
.header .top{
    margin-top: 30px;
    width: 100%;
    height: 36px;
}
.header .top .left{
    float: left;
}
.header .top .right{
    margin-right: 10px;
    line-height: 36px;
    float: right;
    display: flex;
}
.header .top .right a{
    padding: 0 20px;
}
.header .bottom{
    float: left;
    width: 100%;
    height: 4px;
    background-color: darkgrey;
}

a:hover{
    background-color: grey;
    color: black;
}
a.router-link-exact-active{
    background-color: red;
}
</style>