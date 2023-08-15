<template>
  <div class="home-container">
    <div class="home-body">
      <div class="left-body">
        <div class="recommand">
          <div class="carousel">
            <div class="carousel-item" v-if="state.siteInfo.carouselEnable === 'Y'">
              <el-carousel indicator-position="outside" height="330px" class="car-item">
                <el-carousel-item v-for="(item, index) in state.carouselList.slice(
                  0,
                  state.carouselList.length - 2
                )" :key="index">
                  <div class="carousel-item-container">
                    <a :href="item.url" target="_blank"><img :src="item.imgUrl" alt=""
                        style="height: 330px; width: 100%" /></a>
                    <div class="carousel-item-desc">{{ item.desc }}</div>
                  </div>
                </el-carousel-item>
              </el-carousel>
              <div class="small-carousel">
                <div class="small-carousel-item">
                  <img :src="state.carouselList[state.carouselList.length - 2].imgUrl" alt=""
                    class="small-carousel-img" />
                  <div class="sml-car-title">
                    <a target="_blank" :href="state.carouselList[state.carouselList.length - 2].url">{{
                      state.carouselList[state.carouselList.length - 2].desc
                    }}</a>
                  </div>
                </div>
                <div class="small-carousel-item">
                  <img :src="state.carouselList[state.carouselList.length - 1].imgUrl" alt=""
                    class="small-carousel-img" />
                  <div class="sml-car-title">
                    <a target="_blank" :href="state.carouselList[state.carouselList.length - 1].url">{{
                      state.carouselList[state.carouselList.length - 1].desc
                    }}</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="_lrzdvi6yazm"></div>
            <a href="https://curl.qcloud.com/tcHI6pAl"><img src="../assets/img/tencent_tg.jpg" width="100%" alt=""></a>
          </div>
        </div>

        <div style="padding: 0 20px">
          <commonTitle :title="'综合资讯'"></commonTitle>
        </div>
        <listBody :list="state.homeList.result"></listBody>
        <div class="home-pagination">
          <nuxtPagination :pageSize="10" :total="state.homeList.total" :currentPage="state.page" :prePath="'/post/page/'">
          </nuxtPagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import listBody from "@/components/common/pageListBody.vue"
import nuxtPagination from "@/components/common/nuxtPagination.vue"
import commonTitle from "@/components/common/commonTitle.vue"
import { reactive, onMounted } from "vue"
import { toReactive } from "@vueuse/shared";
import { getListApi, getSiteInfoApi } from "@/pages/post/index"
useHead({
  title: "javascript技术分享",
  meta: [
    { name: 'description', content: "书写心得,分享感悟" },
    { name: 'keywords', content: "javascript技术分享,js技术,vuejs,web前端,前端开发,前端面试,web开发,dsiab,个人博客,前端博客" }
  ]
})
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
  page: 1
})

const getList = async () => {
  // 通过异步请求回来的数据都会存储在页面 payload 中。意味着，可能会存在没有用在你的组件的数据也加载到了 payload 中。我们强烈推荐你只选取必须使用在组件上的数据
  let { data } = toReactive(await useFetch(getListApi + '1')) as any;
  state.homeList = data.data
}

onMounted(() => {
  if (process.client) {
    // 在浏览器端调接口，需要服务端做反向代理
    // 广告代码
    (window.slotbydup = window.slotbydup || []).push({
      id: "u6611132",
      container: "_lrzdvi6yazm",
      async: true,
    });
  }
})
const getSiteInfo = async () => {
  let { data } = toReactive(await useFetch(getSiteInfoApi, { method: 'get' })) as any;
  state.siteInfo = data.data
  state.carouselList = JSON.parse(data.data.carouselUrl);
}
// 查询轮播
getSiteInfo()
getList()
</script>

<style lang="less" scoped>
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

            .car-item {
              width: 100%;
            }

            .carousel-item-container {
              position: relative;
              cursor: pointer;

              .carousel-item-desc {
                width: 100%;
                padding: 20px;
                position: absolute;
                bottom: 0;
                left: 0;
                background: #000;
                color: #fff;
                opacity: 0.8;
                text-align: center;
              }
            }

            .small-carousel {
              margin-left: 10px;
              width: 365px;
              padding: 0 0 20px 10px;
              display: flex;
              justify-content: space-between;
              flex-direction: column;

              .small-carousel-item {
                height: 160px;
                margin-bottom: 10px;
                background: #828a92;
                position: relative;

                .small-carousel-img {
                  width: 245px;
                  height: 160px;
                }

                .sml-car-title {
                  width: 100%;
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  color: #fff;
                  background: #000;
                  text-align: center;
                  opacity: 0.8;
                  padding: 10px 0;
                  font-size: 14px;

                  a {
                    color: #fff;
                  }
                }
              }
            }
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
