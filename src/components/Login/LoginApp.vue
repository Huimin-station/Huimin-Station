<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // 引入useRouter

const username = ref('');
const password = ref('');
const router = useRouter(); // 获取路由实例

const handleLogin = () => {
  // 检查用户名和密码是否匹配
  if (username.value === '666666' && password.value === '666666') {
    // alert('登录成功！');
    console.log('用户名:', username.value);
    console.log('密码:', password.value);
    router.push('/home/news'); // 跳转到/home/news[^7^][^11^]
  } else {
    alert('登录失败：用户名或密码错误');
  }
};
</script>

<template>
    <div class="big">

        <div class="login">
    <form>
      <div class="put put1">
        <input type="text" v-model="username" placeholder="请输入您的用户名...">
      </div>
      <div class="put put2">
        <input type="password" v-model="password" placeholder="请输入您的密码...">
      </div>
      <div class="put">
        <button @click.prevent="handleLogin">Login</button>
      </div>
    </form>
  </div>
    </div>
  
</template>

<style lang="less" scoped>
.big{
    background-color: red;
    height: 900px;
}
.login {

  position: absolute;
  margin-top: -250px;
  top: 50%;
  width: 100%;
  height: 500px;
  background-color: rgb(255, 77, 77);
  box-shadow: 1px 30px 20px 10px rgba(0, 0, 0, 0.8);
  .put {
    margin: 100px auto;
    width: 400px;
    height: 60px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 20px;
    overflow: hidden;
    input,
    button {
      padding-left: 20px;
      font-size: 20px;
      color: wheat;
      border: 2px solid yellow;
      width: 100%;
      height: 100%;
      border-radius: 20px;
      background-color: rgba(0, 0, 0, 0.8);
    }
    input:focus {
      border: 2px solid yellow;
    }
  }
}
</style>