<template>
  <div class="project-container">
    <div class="top-container">
      <header>
        <div class="nav">
          <span class="nav-item" v-for="(item, index) in state.list">
            <a :href="item.path">{{ item.name }}</a>
          </span>
        </div>
      </header>
      <div class="project-content">
        <div class="title">
          {{ state.currentItem.h1 }}
        </div>
        <div class="sub-title">{{ state.currentItem.h2 }}</div>
        <div class="install-btn-container">
          <div class="install-btn" round size="large" @click="startUse(state.currentItem.homeUrl)"> 开始使用</div>
        </div>
      </div>
      <div class="project-description">
        <div class="desc">
          <div class="first-title">{{ state.currentItem.h3 }}</div>
          <div class="second-title">{{ state.currentItem.h4 }}</div>
        </div>
        <div class="img-container">
          <img v-if="index == 0" src="../../../assets/img/project/nuxt-web.png" alt="" style="width: 100%;border-radius: 10px;">
          <img v-if="index == 1" src="../../../assets/img/project/vue-admin-plus.png" alt="" style="width: 100%;border-radius: 10px;">
          <img v-if="index == 2" src="../../../assets/img/project/statistics.png" alt="" style="width: 100%;border-radius: 10px;">
          <img v-if="index == 3" src="../../../assets/img/project/cleanads.png" alt="" style="width: 100%;border-radius: 10px;">
        </div>
      </div>
    </div>
    <!-- <div class="bottom-container">
      <div class="project-info">
        <div class="first-title">{{ state.currentItem.h5 }}</div>
        <div class="second-title">{{ state.currentItem.h6 }}</div>
      </div>
      <div class="project-description2">
        <div class="desc">
          <div class="first-title">{{ state.currentItem.h7 }}</div>
          <div class="second-title">{{ state.currentItem.h8 }}</div>
        </div>
        <div class="img-container">
          <img src="../../../assets/img/project/nuxt-web.png" alt="" style="width: 100%;border-radius: 10px;">
        </div>
        <div class="aspect-radius-contaner"></div>
      </div>
    </div> -->
  </div>
</template>
<script lang="ts" setup>
import { reactive, onMounted } from "vue"
// layout 需使用中划线
definePageMeta({
  layout: 'full_screen',
});
useHead({
  title: "项目分享 - javascript技术分享",
  meta: [
    { name: 'description', content: "项目分享 - javascript技术分享" },
    { name: 'keywords', content: "项目分享" }
  ]
})
const route = useRoute()
const state = reactive({
  currentItem: {},
  list: [
    {
      path: "/project",
      name: "nuxtWebPlus",
      h1: "认识 nuxtWebPlus",
      h2: "全球数百万网站（从创作者、小型企业到大型企业）选择的内容发布平台。",
      h3: "简洁友好",
      h4: "精心打磨的视觉语言，让网站内容更自然，更流畅。",
      h5: "轻量高效",
      h6: "加载快速，瞬间渲染，无需等待。",
      h7: "为你所用",
      h8: "让您的网站做任何您需要它做的事情",
      homeUrl:"https://gitee.com/wilkwo/nuxt-web-plus"
    },
    {
      path: "/project/vueAdminPlus",
      name: "vueAdminPlus",
      h1: "认识 vueAdminPlus",
      h2: "全球数百万网站（从创作者、小型企业到大型企业）的后台管理平台。",
      h3: "简洁友好",
      h4: "精心打磨的视觉语言，让网站内容更自然，更流畅。",
      h5: "轻量高效",
      h6: "加载快速，瞬间渲染，无需等待。",
      h7: "为你所用",
      h8: "让您的网站做任何您需要它做的事情",
      homeUrl:"https://gitee.com/wilkwo/vue-admin-plus"
    },
    {
      path: "/project/statistics",
      name: "statistics",
      h1: "认识 easyStatistics",
      h2: "直观详尽的统计你想要统计的数据",
      h3: "简洁友好",
      h4: "直观的数据分析工具，帮助用户快速理解复杂数据",
      h5: "轻量高效",
      h6: "加载快速，瞬间渲染，无需等待。",
      h7: "为你所用",
      h8: "让您的网站做任何您需要它做的事情",
      homeUrl:"https://admin.dsiab.com/#/home"
    },
    {
      path: "/project/cleanads",
      name: "cleanads",
      h1: "认识CleanAds",
      h2: "让搜索回归搜索，最干净的视觉体验",
      h3: "简洁友好",
      h4: "让搜索回归搜索，最干净的视觉体验",
      h5: "轻量高效",
      h6: "加载快速，瞬间渲染，无需等待。",
      h7: "为你所用",
      h8: "让您的网站做任何您需要它做的事情",
      homeUrl:"https://microsoftedge.microsoft.com/addons/detail/cleanads/dbcolhimlphajfmbcbgncolidljommlc?hl=zh-CN"
    }
  ]
})

let path = route.name || ''
let pathObj = {
  "project-nuxtWebPlus": 0,
  "project-vueAdminPlus": 1,
  "project-statistics": 2,
  "project-cleanads": 3
}
let index = pathObj[path] || 0
state.currentItem = state.list[index]
const startUse = (url)=>{
    window.open(url)
}

</script>
<style lang="scss">
.project-container {
  min-height: 100vh;
  transition: all 2s linear;

  .top-container {
    // background-color: #0000ff;
    background: linear-gradient(to bottom, #0000ff, #7b84e6, );
    padding-bottom: 80px;
  }

  .bottom-container {
    background-color: #070254eb;
    padding-bottom: 80px;
    position: relative;

    .project-info {
      width: 70%;
      margin: 0 auto;
      color: #fff;
      padding-top: 80px;

      .first-title {
        font-size: 34px;

      }

      .second-title {
        font-size: 18px;
      }
    }
  }

  header {
    display: flex;

    .nav {
      display: inline-block;
      color: #fff;
      border: 1px solid;
      border-radius: 20px;
      margin: 20px auto;
      background-color: #3333ff;

      .nav-item {
        display: inline-block;
        padding: 10px 15px;
        cursor: pointer;

        a {
          color: #fff;
        }
      }
    }
  }

  .project-content {
    padding-top: 120px;
    width: 50%;
    color: #fff;
    margin: 0 auto;

    .title {
      font-size: 64px;
    }

    .sub-title {
      font-size: 24px;
    }
  }

  .project-description,
  .project-description2 {
    width: 60%;
    margin: 0 auto;
    height: 800px;
    background-color: #f2f6fdeb;
    border-radius: 20px;
    padding: 60px;
    display: flex;
    align-items: center;

    .desc {
      width: 40%;
      padding-right: 20px;

      .first-title {
        font-size: 34px;
      }

      .second-title {
        font-size: 18px;
      }

    }

    .mg-container {
      width: 60%;
      font-size: 18px;
    }
  }

  .project-description {
    margin-top: 80px;
  }

  .project-description2 {
    margin-top: 80px;
    margin-bottom: 80px;

  }

  .aspect-radius-contaner {
    background-image: url("../../assets/img/project/wangge.png");
    background-size: contain;
    position: absolute;
    top: 20px;
    left: 0;
    overflow: visible;
    z-index: 1;
    height: 100%;
    width: 100%;
  }

}
</style>
