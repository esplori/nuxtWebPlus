<template>
  <div id="post-id">
    <div class="home-body">
      <div class="left-body">
        <div class="post-body">
          <h1 class="detail-post-title">{{ state.detailData.title }}</h1>
          <div class="post-info">
            <div class="head-info">
              <div class="title">
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
        <div class="post-footer">
          <div class="tags" v-if="state.detailData.keywords">
            <a :href="'/post/tags/' + item" v-for="(item, index) in state.detailData.keywords.split(',')" :key="index"
              target="_blank"># {{ item }}</a>
          </div>
          <div class="copy-desc">
            <div>本文由作者创作或收集，内容引用如有问题请联系站长处理。</div>
            <div>
              转载请注明原文及出处：<a class="quote" :href="'https://www.dsiab.com/post/' + state.postId">{{ state.detailData.title
              }}</a>
            </div>
          </div>
        </div>
        <recommendRead :list="state.recommendPostList"></recommendRead>
        <comments></comments>
      </div>
    </div>
  </div>
  <!-- 图片弹窗放到文章容器外，防止点击图片预览后再次点击图片后页面无法滚动 -->
  <div id="imageList" style="position: absolute;top: 9999px;left: -9999px;">
    <el-image style="width: 1px; height: 1px;" :src="state.srcUrl" :preview-src-list="state.srcList" :initial-index="0"
      teleported hide-on-click-modal fit="contain" />
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
  recommendPostList: [],
  srcUrl: "",
  srcList: []
})

state.postId = route.params.id as any
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

const getRecomList = async () => {
  // 通过异步请求回来的数据都会存储在页面 payload 中。意味着，可能会存在没有用在你的组件的数据也加载到了 payload 中。我们强烈推荐你只选取必须使用在组件上的数据
  let { data } = toReactive(await useFetch(getRecommendPostBySameTagsApi + "?id=" + route.params.id)) as any;
  state.recommendPostList = data.data
}
const initImagePreview = () => {
  // 只给文章页面添加图片点击事件
  let dom = document.getElementById("post-id")
  // 监听点击事件
  dom && dom.addEventListener("click", (e) => {
    // 阻止事件冒泡
    e.stopPropagation()
    // 获取点击的元素
    let target = e.target as HTMLElement
    // 如果点击的元素是图片，且自定义字段不为预览中的图片
    if (target.tagName == 'IMG' && target.dataset.clickFlag != 'Y') {
      // 图片预览
      state.srcUrl = target.src
      state.srcList = [target.src]
      // 设置定时器，每200毫秒检查一次图片是否被点击
      setTimeout(() => {
        // 获取图片列表
        let imageIds = document.getElementById("imageList")
        // 遍历图片列表，检查图片是否被点击
        imageIds?.querySelectorAll("#imageList img").forEach(item => {
          // 预览的图片添加标记字段确保不进入全局click事件
          item.dataset.clickFlag = 'Y'
          // 默认点击一次图片
          item.click()
        })
      }, 200)

    }
  })
}

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

    // 浏览器端添加图片点击事件
    initImagePreview()
  }
})
</script>

<style lang="scss">
#post-id {
  img {
    max-height: 70% !important;
    max-width: 70% !important;
    margin: 20px auto;
    display: block;
    border: 1px dashed #ddd;
    // box-shadow: 5px 6px 20px #c4bebd;
    border-radius: 5px;
    cursor: zoom-in;
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
    padding-bottom: 1.4rem;
  }


  .el-dialog.custom-dialog-class .el-dialog__body {
    padding: 0;
  }

  .el-dialog.custom-dialog-class .el-dialog__header {
    padding: 0;
  }
}
</style>
<style lang="scss" scoped>
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

      // background: #fff;
      // box-shadow: 0 0 20px rgba(210, 211, 216, 0.3);
      .post-body {
        background-color: #fff;
        padding: 20px 20px 0 20px;
        border-radius: 5px;
      }

      .detail-post-title {
        color: #141414;
        font-size: 2rem;
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
        padding: 10px 0 0 0;
        font-size: 14px;
        // line-height: 32px;
        // margin-bottom: 24px;
        margin-top: 15px;
        text-align: justify;
        color: #4a4a4a;
        font-weight: 400;
        word-break: break-all;
        white-space: normal;
        overflow-x: auto;

      }

      .copy-desc {
        padding: 20px 10px;
        background: #f5f5f5;
        word-break: break-all;
        border-radius: 5px;
        border: 1px dashed #ddd;
        color: #655e5e;

        div {
          font-size: 1rem;
        }
      }

      .tags {
        margin-bottom: 20px;

        a {
          margin-right: 10px;
          text-decoration: none;
          font-size: 1rem;
          line-height: 17px;
          letter-spacing: .05em;
          color: #655e5e;
          padding: 5px 10px;
          background: #f5f5f5;
        }
      }

      .post-footer {
        margin-bottom: 1rem;
        padding: 20px;
        background-color: #fff;

        .quote {
          color: #655e5e;
        }
      }
    }

    .side-bar {
      padding: 20px;
      background: #fff;
      // box-shadow: 0 1px 3px rgba(27, 95, 160, 0.1);
    }
  }
}
</style>
