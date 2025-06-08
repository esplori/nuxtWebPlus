<template>
  <div class="home-container">
    <div class="home-body">
      <div class="left-body">
        <div class="recommand">
          <div class="carousel">
            <div class="carousel-item" v-if="state.siteInfo.carouselEnable === 'Y'">
              <homeCarousel :state="state"></homeCarousel>
            </div>
            <!-- <div class="_lrzdvi6yazm"></div> -->
            <a v-if="state.siteInfo.ad_switch == 'Y'" href="https://curl.qcloud.com/tcHI6pAl"><img src="../assets/img/tencent_tg.jpg" width="100%" alt=""></a>
          </div>
        </div>

        <div style="padding: 0 20px">
          <commonTitle :title="'综合资讯'"></commonTitle>
        </div>
        <listBody :list="state.homeList.result"></listBody>
        <div class="home-pagination">
          <nuxtPagination :pageSize="10" :total="state.homeList.total" :currentPage="state.page"
            :prePath="'/post/page/'">
          </nuxtPagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// 引入组件，用于页面布局和分页显示
import listBody from "@/components/common/pageListBody.vue"
import nuxtPagination from "@/components/common/nuxtPagination.vue"
import commonTitle from "@/components/common/commonTitle.vue"
import homeCarousel from "@/components/common/home-carousel.vue"

// 引入 Vue 重新响应化工具和 VueUse 的 toReactive 函数
import { reactive, onMounted } from "vue"
import { toReactive } from "@vueuse/shared"

// 引入后端 API 接口
import { getListApi, getSiteInfoApi } from "@/pages/post/index"

// 设置页面头部信息
useHead({
  title: "javascript技术分享",
  meta: [
    { name: 'description', content: "书写心得,分享感悟" },
    { name: 'keywords', content: "javascript技术分享,js技术,vuejs,web前端,前端开发,前端面试,web开发,dsiab,个人博客,前端博客" }
  ]
})

// 定义状态对象，包含网站信息、轮播图列表、首页文章列表等数据
const state = reactive({
  siteInfo: {
    beianNo: '',
    carouselEnable: 'N',
    carouselUrl: "",
    siteDesc: '',
    siteName: '',
    siteUrl: ''
  },
  carouselList: [],
  homeList: {
    result: [],
    total: 0
  },
  page: 1,
  menuList: []
})

/**
 * 异步获取文章列表数据，并更新 state 中的 homeList
 */
const getList = async () => {
  // 使用 VueUse 的 useFetch 函数获取数据，并转换为 reactive 对象
  // 通过异步请求回来的数据都会存储在页面 payload 中。意味着，可能会存在没有用在你的组件的数据也加载到了 payload 中。我们强烈推荐你只选取必须使用在组件上的数据
  let { data } = toReactive(await useFetch(getListApi + '1')) as any;
  state.homeList = data.data
}

// 在组件挂载后执行的函数，主要用于客户端的初始化操作
onMounted(() => {
  // 客户端环境下，加载广告代码
  // if (process.client) {
  //   // 广告代码
  //   (window.slotbydup = window.slotbydup || []).push({
  //     id: "u6611132",
  //     container: "_lrzdvi6yazm",
  //     async: true,
  //   });
  // }
})

/**
 * 异步获取网站配置信息，并更新 state 中的相关数据
 */
const getSiteInfo = async () => {
  // 使用 VueUse 的 useFetch 函数获取数据，并转换为 reactive 对象
  let { data } = toReactive(await useFetch(getSiteInfoApi, { method: 'get' })) as any;
  state.siteInfo = data.data
  // 解析并更新轮播图列表
  // 轮播列表
  state.carouselList = JSON.parse(data.data.carouselUrl);
  // 解析并更新菜单列表
  // 菜单
  state.menuList = JSON.parse(data.data.menuList);
}

// 初始化，获取网站信息和文章列表
// 查询轮播
getSiteInfo()
getList()
</script>

<style lang="scss" scoped>
.home-container {
  width: 100%;

  .home-body {
    display: flex;
    justify-content: space-between;

    .big-title {
      font-size: 20px;
      padding: 5px 0;
      border-bottom: 1px solid #f5f5f5;
    }

    .common-big-title {
      padding: 5px 20px;
    }

    .left-body {
      width: 100%;
      background: #fff;
      box-shadow: 0 0 20px rgba(210, 211, 216, 0.3);
      border-radius: 5px;

      .recommand {
        display: flex;
        justify-content: space-between;
        // border: 1px solid #aaa;
        padding: 20px;
        width: 100%;

        .carousel {
          width: 100%;
          background: #fff;
          padding-bottom: 20px;
          border-bottom: 1px solid #f5f5f5;

          .carousel-item {
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
          }
        }
      }

      ul {
        li {
          padding: 30px 20px;
          border-bottom: 1px solid #f5f5f5;

          .home-post-title {
            font-size: 22px;
            text-overflow: ellipsis;
          }

          .home-post-title:hover {
            color: #06c;
          }

          .home-post-excerpt {
            line-height: 30px;
            padding: 15px 0;
            font-size: 16px;
            color: #828a92;
            word-break: break-all;
          }

          .home-post-info {
            padding-top: 10px;
            font-size: 12px;
            color: #828a92;

            span {
              margin-right: 10px;
            }

            .cate-name {
              // background: #e6f1fb;
              color: #828a92;
              font-weight: 400;
              line-height: 18px;
            }

            .create-date {
              color: #828a92;
            }

            .views {
              color: #828a92;
            }
          }
        }

        li:hover {
          background: #f9fafb;
        }
      }

      .home-pagination {
        padding: 20px;
        background: #fff;
        text-align: center;
      }
    }

    // .right-sidebar {
    //   max-width: 385px;
    // }
    @media screen and (max-width: 1024px) {

      // .right-sidebar,
      ._lrzdvi6yazm {
        display: none;
      }
    }

    @media (max-width: 575.98px) {

      .big-title,
      .card,
      .carousel {
        display: none;
      }
    }
  }
}
</style>
