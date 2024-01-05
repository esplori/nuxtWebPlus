<template>
  <div class="home-header">
    <div class="site-info">
      <div class="menu">
        <el-menu mode="horizontal">
          <el-menu-item v-for="(item, index) in noChildren" :index="String(item.name)">
            <a :href="item.path" target="_self">{{ item.name }}</a>
          </el-menu-item>
          <el-sub-menu v-for="(item, id) in hasChildren" :index="String(id)">
            <template #title>
              {{ item.name }}
            </template>
            <el-menu-item v-for="(it, idx) in item.children" :index="String(it.name)">
              <a :href="it.path" target="_self">{{ it.name }}</a>
            </el-menu-item>
          </el-sub-menu>
          <!-- <el-menu-item index="tbk">
            <a href="/tbk" target="_self">优乐购</a>
          </el-menu-item> -->
          <!-- <el-menu-item index="games">
            <a href="https://source.dsiab.com/games/index.html" target="_blank">在线游戏</a>
          </el-menu-item> -->
          <el-menu-item index="about">
            <a href="/post/13">关于</a>
          </el-menu-item>
          <el-menu-item index="updateLog">
            <a href="https://gitee.com/wilkwo/nuxt-web-plus/releases" target="_blank">更新日志</a>
          </el-menu-item>
          <!-- <el-menu-item index="login">
            <a href="https://admin.dsiab.com/#/login" target="_blank">登录</a>
          </el-menu-item> -->
        </el-menu>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, computed } from "vue"
let state = reactive({
  activeIndex: "",
  menList: [
    { name: "首页", path: "/" },
    { name: "网站导航", path: "/nav" },
    // {
    //   name: "前端教程",
    //   path: "",
    //   children: [
    //     {
    //       name: "w3school教程",
    //       path: "http://source.dsiab.com/course/w3c/",
    //     },
    //     {
    //       name: "less教程",
    //       path: "http://source.dsiab.com/course/less/less.bootcss.com/index.html",
    //     },
    //     {
    //       name: "react教程",
    //       path: "http://source.dsiab.com/course/react/react.docschina.org/index.html",
    //     },
    //   ],
    // },
    // {
    //   name: "后端教程",
    //   path: "",
    //   children: [
    //     { name: "c语言教程", path: "http://source.dsiab.com/course/C/" },
    //     { name: "mysql教程", path: "http://source.dsiab.com/course/mysql/" },
    //   ],
    // }
  ],
})
const noChildren = computed(() => {
  return state.menList.filter((item) => {
    return !item.children;
  });
})
const hasChildren = computed(() => {
  return state.menList.filter((item) => {
    return item.children;
  });
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

  .el-menu--horizontal.el-menu {
    border-bottom: none;
  }

  .site-info {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .menu {
      width: 100%;
      // display: flex;
      align-items: center;

      .el-menu-item {
        font-size: 1.2rem;
      }

      .el-sub-menu__title {
        font-size: 1.2rem;
      }

      .el-menu--horizontal>.el-submenu .el-submenu__title {
        line-height: 65px;
      }
    }
  }
}
</style>
