<template>
  <div class="home-footer">
    <div class="site-info">
      <div><a href="https://nuxt.com/">© 基于nuxt</a></div>
      <div><a href="https://beian.miit.gov.cn/">粤ICP备20013202号</a></div>
      <div><a href="/">© 2020-{{new Date().getFullYear()}} javascript技术分享</a></div>
    </div>
    <el-backtop :bottom="100"> </el-backtop>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
useHead({
  script: [
    // { src: 'https://cpro.baidustatic.com/cpro/ui/cm.js' },
    // { src: 'https://source.dsiab.com/plugins/webstatistics.js' },
    // { src: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/highlight.min.js' },
  ]
})

const initWebStat = () => {
  let webStats = new webStatistics({
    baseUrl: "/manage-service", // 基础接口地址url
    url: "/stats/getStats.gif", // 请求上报api的接口地址
    routeMode: "history", // 填写单页面应用中使用的路由模式。
    autoUpload: true, // 是否自动请求接口，在setUserId之后会以baseUrl+url形式在页面切换时自动请求上报PV/UV的接口
    prop: {
      //请求参数映射，参数名默认如下，可以自定义修改参数名。
      id: "visitorId",
    },
  });
  setTimeout(() => {
    webStats.setUserId('dsiab');
  }, 1000);
}

const initGoogleAnalytics = () => { 
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-HX495VD0E0');
}

onMounted(() => {
  if (process.client) {
    initWebStat()
    initGoogleAnalytics()
  }
})
</script>
<style lang="scss">
.home-footer {
  padding: 40px 0 80px 0;
  color: #fff;
  background: #222c3c;

  .site-info {
    width: 400px;
    margin: 0 auto;
    text-align: center;
    color: #828a92;

    div {
      padding: 5px;

      a {
        font-size: 14px;
        color: #fff;
      }
    }
  }
}
</style>
