<template>
  <div id="post-id">
    <div class="home-body">
      <div class="left-body">
        <div>
          <h1 class="detail-post-title">{{ state.detailData.title }}</h1>
          <div class="post-info">
            <div class="head-info">
              <div class="title">
                <!-- <span class="userName">
                  {{ state.detailData.nickname || state.detailData.createBy }}</span> -->
              </div>
              <div class="other-info">
                <span>作者: {{ state.detailData.nickname || state.detailData.createBy }} </span>
                <span>分类: {{ state.detailData.cateName }} </span>
                <span>阅读: {{ state.detailData.views }} </span>
                <span v-if="state.detailData.wordsNum">字数: {{ state.detailData.wordsNum }} </span>
                <span class="createDate">发布时间： {{ state.detailData.createDate }}</span>
              </div>
            </div>
          </div>
          <div class="_utrtw8kq5so"></div>
          <div v-html="state.detailData.content" class="detail-post-content"></div>
          <!-- <div class="_cwvxpd9dl8s"></div> -->
        </div>
        <div>
          <div class="tags" v-if="state.detailData.keywords">
            标签：<a :href="'/post/tags/' + item" v-for="(item, index) in state.detailData.keywords.split(',')" :key="index"
              target="_blank">{{ item }}</a>
          </div>
          <div class="copy-desc">
            <div>
              如若转载请注明原文及出处：<a :href="'https://www.dsiab.com/post/' + state.postId">https://www.dsiab.com/post/{{
                state.postId }}</a>
            </div>
            <div>
              本站文章由javascript技术分享原创和收集，内容引用如有问题请联系站长删除。
            </div>
          </div>
        </div>
        <recommendRead :list="state.recommendPostList"></recommendRead>
        <comments></comments>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getDetailApi, getRecommendPostBySameTagsApi } from "@/pages/post/index"
import { reactive, onMounted } from "vue"
import { toReactive } from "@vueuse/shared";
import recommendRead from "@/components/post/recommendRead.vue"
import { useRoute } from "vue-router"
import comments from "@/components/post/comments.vue"
// 引入highlightjs代碼高亮插件
import 'highlight.js/styles/stackoverflow-light.css'
import hljs from "highlight.js"

const route = useRoute()
let state = reactive({
  detailData: {
    title: "",
    nickname: "",
    createBy: "",
    createDate: "",
    views: "",
    wordsNum: "",
    content: "",
    keywords: "",
    id: "",
    cateName: ""
  },
  postId: "",
  recommendPostList: []
})

state.postId = route.params.id as any
// const getList = async () => {
// 通过异步请求回来的数据都会存储在页面 payload 中。意味着，可能会存在没有用在你的组件的数据也加载到了 payload 中。我们强烈推荐你只选取必须使用在组件上的数据
let { data } = toReactive(await useFetch(getDetailApi + route.params.id)) as any;
// 查不到数据时显示404
if (!data) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}
state.detailData = data.data.result
useHead({
  title: state.detailData.title + " - javascript技术分享",
  meta: [
    { name: 'description', content: state.detailData.title + " - javascript技术分享" },
    { name: 'keywords', content: state.detailData.keywords || state.detailData.title }
  ]
})
setTimeout(() => {
  hljs.highlightAll()
}, 200)
// }

const getRecomList = async () => {
  // 通过异步请求回来的数据都会存储在页面 payload 中。意味着，可能会存在没有用在你的组件的数据也加载到了 payload 中。我们强烈推荐你只选取必须使用在组件上的数据
  let { data } = toReactive(await useFetch(getRecommendPostBySameTagsApi + "?id=" + route.params.id)) as any;
  state.recommendPostList = data.data
}
// getList()
getRecomList()


onMounted(() => {
  if (process.client) {
    // 顶部广告
    (window.slotbydup = window.slotbydup || []).push({
      id: "u6324930",
      container: "_utrtw8kq5so",
      async: true,
    });
    // 底部广告
    // (window.slotbydup = window.slotbydup || []).push({
    //   id: "u6324927",
    //   container: "_cwvxpd9dl8s",
    //   async: true,
    // });
  }
})
</script>

<style lang="less">
#post-id {
  img {
    width: 70% !important;
    margin: 20px auto;
    display: block;
    border: 1px dashed #ddd;
    box-shadow: 5px 6px 20px #c4bebd;
    border-radius: 10px;
  }

  a {
    text-decoration: underline;
  }

  .image-container-fill {
    padding-bottom: 0 !important;
  }

  .detail-post-content {
    blockquote {
      background: #f5f5f5 !important;
      padding: 10px !important;
      margin: 0 !important;
    }
  }

  .detail-post-content p {
    font-size: 1.2rem;
    // text-indent: 2rem;
    padding: 0 0 20px 0;
  }


  .el-dialog.custom-dialog-class .el-dialog__body {
    padding: 0;
  }

  .el-dialog.custom-dialog-class .el-dialog__header {
    padding: 0;
  }
}
</style>
<style lang="less" scoped>
@media (max-width: 760px) {
  ._cwvxpd9dl8s {
    display: none;
  }

  ._utrtw8kq5so {
    display: none;
  }
}

#post-id {
  .home-body {
    display: flex;
    justify-content: space-between;

    .left-body {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: #fff;
      padding: 20px;
      box-shadow: 0 0 20px rgba(210, 211, 216, 0.3);
      border-radius: 5px;

      .detail-post-title {
        color: #141414;
        font-size: 1.5rem;
        margin-bottom: 5px;
      }

      .post-info {
        border-bottom: 1px dashed #ddd;
        margin: 10px 0;
        padding: 10px 0;
        font-size: 14px;
        color: #020202;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        span {
          margin-right: 20px;
        }

        .avatar {
          display: flex;
        }

        .profile-photo {
          display: inline-block;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: url("https://source.dsiab.com/upload/bb4f38bd-160a-4e89-9697-2733231a8f84.jpg") no-repeat;
          background-size: cover;
        }

        .head-info {
          padding: 0 10px 0 0;

          .other-info {
            font-size: 14px;
            // color: #969696;
            opacity: 0.65;
          }

          .userName {
            font-size: 14px;
            font-weight: bold;
          }

          .createDate {
            font-size: 14px;
            // color: #969696;
          }
        }
      }

      .detail-post-content {
        padding: 10px 0;
        font-size: 14px;
        // line-height: 32px;
        margin-bottom: 24px;
        margin-top: 15px;
        text-align: justify;
        color: #4a4a4a;
        font-weight: 400;
        word-break: break-word;
        white-space: normal;
        overflow-x: auto;

      }

      .copy-desc {
        padding: 20px 10px;
        background: #f5f5f5;
        word-break: break-all;
        border-radius: 5px;
        border:1px dashed #ddd;

        div {
          font-size: 1rem;
        }
      }

      .tags {
        font-size: 1.2rem;
        padding: 20px 0;

        a {
          margin-right: 10px;
          text-decoration: underline;
        }
      }
    }

    // .right-sidebar {
    //   max-width: 385px;
    // }
    @media screen and(max-width: 1024px) {
      // .right-sidebar {
      //   display: none;
      // }
    }

    .side-bar {
      padding: 20px;
      background: #fff;
      // box-shadow: 0 1px 3px rgba(27, 95, 160, 0.1);
    }
  }
}
</style>
