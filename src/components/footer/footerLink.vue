<script setup>
import { reactive } from 'vue'

const msg = reactive([
  {
    title: '公司简介',
    children: [
      { title: '公司文化', url: '/' },
      { title: '公司文化', url: '/' },
      { title: '公司文化', url: '/' },
      { title: '公司文化', url: '/' },
      { title: '公司文化', url: '/' }
    ]
  }, {
    title: '公司简介',
    children: [
      { title: '公司文化', url: '/' },
      { title: '公司文化', url: '/' },
      { title: '公司文化', url: '/' },
      { title: '公司文化', url: '/' },
      { title: '公司文化', url: '/' }
    ]
  }, {
    title: '公司简介',
    children: [
      { title: '公司文化', url: '/' },
      { title: '公司文化', url: '/' },
      { title: '公司文化', url: '/' },
      { title: '公司文化', url: '/' }
    ]
  }, {
    title: '公司简介',
    children: [
      { title: '公司文化', url: '/' },
      { title: '公司文化', url: '/' }
    ]
  }, {
    title: '公司简介',
    children: [
      { title: '公司文化', url: '/' },
      { title: '公司文化', url: '/' },
      { title: '公司文化', url: '/' }
    ]
  }
])
</script>

<template>
  <div class="link">
    <div class="box">
      <div class="left">
        <div class="item" v-for="(item,i) in msg" :key="i">
          <div class="title">
            <span>{{ item.title }}</span>
          </div>
          <ul>
            <li v-for="(children,j) in item.children" :key="j">
              <router-link :to="children.url">{{ children.title }}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <span>企业微信</span>
        <img src="@/assets/logo.svg" alt="这是二维码">
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.link {
  width: 100%;
  background: #676767;
  padding: 2rem 0 0 0;

  .box {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    color: white;
    gap: 2rem;

    .left {
      flex: 5;
      display: flex;
      justify-content: space-around;

      .item {
        .title {
          font-size: 1.2rem;
          font-weight: bold;
        }

        ul {
          li {
            margin: 1rem 0;

            a {
              color: white;
            }
          }
        }
      }
    }

    .right {
      flex: 2;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.5rem;
      font-weight: bold;
      border-left: 3px solid rgba(255, 255, 255, 0.5);
      padding: 0 0 0 1rem;
      img{
        width: 10rem;
      }
    }
  }
}
a{
  list-style: none;
  text-decoration: none;
}
li{
  list-style: none;
}

</style>
