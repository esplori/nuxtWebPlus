<template>
  <div class="project-container">
    <common></common>
  </div>
</template>
<script lang="ts" setup>
import common from "./components/common.vue"
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
const state = reactive({
  currentItem: {}
})

</script>
<style lang="scss" scoped>
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
