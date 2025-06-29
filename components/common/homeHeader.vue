<template>
  <div class="home-header">
    <div class="site-info">
      <div class="menu">
        <!-- <el-menu mode="horizontal">
          <el-menu-item v-show="item.enabled === 'Y'" v-for="(item, index) in state.menuList"
            :index="String(item.menuUrl)">
            <a :href="item.menuUrl" target="_self">{{ item.menuName }}</a>
          </el-menu-item>
        </el-menu> -->
        <div class="menu-item" v-show="item.enabled === 'Y'" v-for="(item, index) in state.menuList">
          <a :href="item.menuUrl" target="_self">{{ item.menuName }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue"
import { toReactive } from "@vueuse/shared";
import { getSiteInfoApi } from "@/pages/post/index"
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
}
// 查询轮播
getSiteInfo()
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
    max-width: 1400px;
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
