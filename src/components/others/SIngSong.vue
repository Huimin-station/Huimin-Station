<template>
  
  <div class="bbbox" >
    <div class="closs" @click="closs">❌</div>
    <div class="container">
      <h1>APlayer 音乐播放器示例</h1>
      <div ref="aplayer"></div>
    </div>
  </div>
</template>

<script>
import APlayer from "aplayer";
import "aplayer/dist/APlayer.min.css";

export default {
  name: "APlayerComponent",
  mounted() {
    this.initAPlayer();
  },
  methods: {
    initAPlayer() {
      const ap = new APlayer({
        container: this.$refs.aplayer,
        audio: [
          {
            name: "拜年歌(伴奏)",
            artist: "萌萌哒天团",
            url: "http://xinxi.huiminxiaozhan.com:8080/music/%E6%AC%A2%E4%B9%90%E4%B8%AD%E5%9B%BD%E5%B9%B4.mp3", // 确保路径正确
            cover: "https://tse3-mm.cn.bing.net/th/id/OIP-C.NP8_lz72gc5tXgAmxeWzAgHaJ3?w=156&h=181&c=7&r=0&o=5&dpr=2&pid=1.7", // 确保路径有效
            lrc: `
              [00:00.00] 平凡之路
              [00:05.00] 走在幽静的夜晚里
              [00:10.00] 我们在平凡的路上
            `,
          },
          {
            name: "好运来",
            artist: "祖海",
            url: "http://xinxi.huiminxiaozhan.com:8080/music/好运来.mp3", // 确保路径正确
            cover: "https://example.com/path/to/小幸运.jpg", // 确保路径有效
            lrc: `
              [00:00.00] 小幸运
              [00:01.00] 你出现的我生命里
              [00:10.00] 是我最美丽的意外
            `,
          },
          {
            name: "欢乐中国年",
            artist: "卓依琳",
            url: "http://xinxi.huiminxiaozhan.com:8080/music/欢乐中国年.mp3", // 确保路径正确
            cover: "https://example.com/path/to/小幸运.jpg", // 确保路径有效
            lrc: `
              [00:00.00] 小幸运
              [00:01.00] 你出现的我生命里
              [00:10.00] 是我最美丽的意外
            `,
          },
          {
            name: "我的果汁分你一半",
            artist: "陈立农",
            url: "http://xinxi.huiminxiaozhan.com:8080/music/我的果汁分你一半 .mp3", // 确保路径正确
            cover: "https://example.com/path/to/小幸运.jpg", // 确保路径有效
            lrc: `
              [00:00.00] 小幸运
              [00:01.00] 你出现的我生命里
              [00:10.00] 是我最美丽的意外
            `,
          },
          {
            name: "星と僕らと",
            artist: "目黑将司",
            url: "http://xinxi.huiminxiaozhan.com:8080/music/星と僕らと .mp3", // 确保路径正确
            cover: "https://example.com/path/to/小幸运.jpg", // 确保路径有效
            lrc: `
              [00:00.00] 小幸运
              [00:01.00] 你出现的我生命里
              [00:10.00] 是我最美丽的意外
            `,
          }
        ],
        loop: "all",
        autoplay: true,
        theme: "red",
        preload: "auto",
        volume: 0.7,
        mutex: true,
        mini: false,
        listFolded: false,
        listMaxHeight: 300,
      });
    },
    closs() {
      const bbbox = document.querySelector(".bbbox");
      bbbox.style.display = "none";
    },
  },
};

</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}
.container {
  text-align: center;
}
h1 {
  margin-bottom: 20px;
}
.aplayer {
  width: 800px;
  max-width: 800px;
  margin: 0 auto;
}
.bbbox {
  z-index: 11;
  width: 1000px;
  height: 600px;
  background-color: rgb(56, 24, 24);
  position: fixed;
  top: 50%;
  margin-top: -300px;
  left: 50%;
  margin-left: -500px;
  border-radius: 20px;
  overflow: hidden;
}
.bbbox .closs {
  float: right;
  width: 40px;
  border-radius: 50%;
  height: 40px;
  background-color: rgb(255, 140, 0);
  text-align: center;
  line-height: 40px;
  animation: clossButton 5s linear infinite;
}

@keyframes clossButton {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>