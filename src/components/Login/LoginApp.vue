<script setup>

</script>

<template>
    <div class="login">
        <form action="">
            <div class="put"><input type="text" placeholder="请输入您的用户名..."></div>
            <div class="put"><input type="text" placeholder="请输入您的密码..."></div>
            <router-link to="/home/news"><div class="put"><button>Login</button></div></router-link>
            
        </form>
    </div>
</template>

<style lang=less scoped>
   .login{
    position: absolute;
    margin-top: -250px;
    top: 50%;
    width: 100%;
    height: 500px;
    background-color: grey;
    box-shadow: 1px 30px 20px 10px rgba(0, 0, 0, .8);
    .put{
        margin:100px auto;
        width: 400px;
        height: 60px;
        background-color: rgba(0, 0, 0, .8);
        border-radius: 20px;
        overflow: hidden;
        input,button{
            padding-left: 20px;
            font-size: 20px;
            color: wheat;
            border: 2px solid yellow;
            width: 100%;
            height: 100%;
            border-radius: 20px;
            background-color:rgba(0, 0, 0, .8);
        }
        input:focus{
            border: 2px solid yellow;
        }
    }
}

</style>