<template>
  <header class="home-header">
    <div class="site-info">
      <div class="menu">
        <!-- <el-menu mode="horizontal">
          <el-menu-item v-show="item.enabled === 'Y'" v-for="(item, index) in state.menuList"
            :index="String(item.menuUrl)">
            <a :href="item.menuUrl" target="_self">{{ item.menuName }}</a>
          </el-menu-item>
        </el-menu> -->
        <div class="menu-item" v-show="item.enabled === 'Y'" v-for="(item, index) in state.menuList">
          <a :href="item.menuUrl" target="_self" data-umami-event="menu click">{{ item.menuName }}</a>
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>
import { reactive } from "vue"
import { toReactive } from "@vueuse/shared";
import { getSiteInfoApi } from "@/pages/post/index"
const siteInfoStore = useState('siteInfoStore')
let state = reactive({
  menuList: [
    // { name: "首页", path: "/" },
    // { name: "网站导航", path: "/nav" },
  ],
})
const getSiteInfo = async () => {
  let { data } = toReactive(await useFetch(getSiteInfoApi, { method: 'get' })) as any;
  // 菜单
  state.menuList = JSON.parse(data.data.menuList);
  siteInfoStore.value = data.data
}
// 查询轮播
getSiteInfo()
function removeAdSenseScript() {
  // 查找包含 AdSense URL 的 script 标签
  const existingScript = document.querySelector('script[src*="adsbygoogle"]');

  if (existingScript) {
    console.log('AdSense script found, removing it...');
    existingScript.remove();

    // 同时清除全局变量
    if (window.adsbygoogle) {
      delete window.adsbygoogle;
    }

    return true;
  } else {
    console.log('AdSense script not found');
    return false;
  }
}

onMounted(() => {
  // 调用函数删除脚本
  if (process.client) {
    if (siteInfoStore.value.ad_switch == 'N') {
      removeAdSenseScript()
    }
  }
})
</script>

<style lang="scss">
.home-header {
  background: #fff;
  border-bottom: 1px solid #f5f5f5;
  box-shadow: 0 0 20px rgba(210, 211, 216, 0.3);
  position: sticky;
  top: 0;
  z-index: 1000;


  .site-info {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .menu-item {
      font-size: 1.2rem;
      display: inline-block;

      a {
        padding: 20px 15px;
        display: inline-block;

        &:hover {
          background: #f5f5f5;
          color: #409eff;
        }
      }

    }
  }
}
</style>
