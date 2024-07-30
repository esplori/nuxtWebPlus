<template>
  <div class="project-container">
    <div class="top-container">
      <header>
        <div class="nav">
          <span class="nav-item">nuxt-web-plus</span>
          <span class="nav-item">vue-admin-plus</span>
          <span class="nav-item">springbootadmin</span>
          <span class="nav-item">statistics</span>
          <span class="nav-item">cleanads</span>
        </div>
      </header>
      <div class="project-content">
        <div class="title">
          基于NUXT的开发的博客系统
        </div>
        <div class="sub-title">基于NUXT的开发的博客系统</div>
      </div>
      <div class="project-description">
        <div class="desc">
          <div class="first-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          <div class="second-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum,</div>
        </div>
        <div class="img-container">
          <img src="../../assets/img/project/nuxt-web.png" alt=""
            style="width: 100%;border-radius: 10px;">
        </div>
      </div>
    </div>
    <div class="bottom-container">
      <div class="project-info">
        <div class="first-title">轻便、简洁</div>
        <div class="second-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque cupiditate voluptas corporis enim vero fuga ut soluta deleniti sequi distinctio? Ipsa, repudiandae! Quia eveniet labore, tempora temporibus sapiente dolorum exercitationem.</div>
      </div>
      <div class="project-description2">
        <div class="desc">
          <div class="first-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          <div class="second-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum,</div>
        </div>
        <div class="img-container">
          <img src="../../assets/img/project/nuxt-web.png" alt=""
          style="width: 100%;border-radius: 10px;">
        </div>
        <div class="aspect-radius-contaner"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue"
import { toReactive } from "@vueuse/shared";
// layout 需使用中划线
definePageMeta({
  layout: 'full_screen',
});
useHead({
  title: "网站导航 - javascript技术分享",
  meta: [
    { name: 'description', content: "网站导航 - javascript技术分享" },
    { name: 'keywords', content: "网站导航" }
  ]
})
const state = reactive({
  tabPosition: "left",
})


</script>
<style lang="scss" scoped>
.project-container {
  min-height: 100vh;
  .top-container {
    background-color: #0000ff;
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
      }
    }
  }

  .project-content {
    padding-top: 120px;
    width: 70%;
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
    width: 70%;
    margin: 0 auto;
    height: 800px;
    background-color: #f2f6fdeb;
    border-radius: 20px;
    padding: 80px;
    display: flex;
    align-items: center;

    .desc {
      width: 40%;
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

  .aspect-radius-contaner{
    background-image: url("../../assets/img/project/wangge.png");
    background-size: contain;
    position: absolute;
    top: 20px;
    left: 20px;
    overflow: visible;
    z-index: 1;
    height: 100%;
    width: 100%;
  }

}
</style>
