<template>
  <div class="navigation-container">
    <div class="home-body">
      <el-row :gutter="10">
        <el-col :span="24">
          <div class="left-body">
            <div v-for="(item, index) in state.list" :key="index">
              <div class="module-name">{{ item.name }}</div>
              <div class="child-cate">
                <div class="cate-item" v-for="(it, ix) in item.children" :key="ix">
                  <el-card shadow="none">
                    <div class="title">
                      <a :href="it.url" target="_blank"> {{ it.title }}</a>
                    </div>
                    <div class="content">{{ it.content }}</div>
                  </el-card>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { getListApi } from "./api";
import { reactive } from "vue"
import { toReactive } from "@vueuse/shared";
// layout 需使用中划线
definePageMeta({
  layout: 'no-side',
});
useHead({
  title: "网站导航 - javascript技术分享",
  meta: [
    { name: 'description', content: "网站导航 - javascript技术分享" },
    { name: 'keywords', content: "网站导航" }
  ]
})
const state = reactive({
  list: [
    {
      name: "", children: [
        { title: '', url: "", content: "" }
      ]
    }
  ],
  tabPosition: "left",
})
const getSiteInfo = async () => {
  let { data } = toReactive(await useFetch(getListApi, { method: 'get' })) as any;
  state.list = data.data
}
getSiteInfo()
</script>
<style lang="scss" scoped>
.navigation-container {
  .home-body {
    width: 100%;

    .left-body {
      background: #fff;
      box-shadow: 0 1px 3px rgba(27, 95, 160, 0.1);
      .module-name{
        padding: 14px;
        font-size: 18px;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.8);
        background-color: var(--el-color-info-light-8);
        position: sticky;
        top: 0;
        z-index: 1001;
      }
      .child-cate {
        width: 100%;
        padding: 0;
        display: flex;
        flex-wrap: wrap;

        .cate-item {
          width: 33%;
          font-size: 16px;
          padding: 10px;
          border-radius: 5px;

          .title {
            font-size: 14px;

            a {
              color: #0366d6;
            }
          }

          .content {
            font-size: 12px;
            padding: 5px 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }

      a {
        color: #666;
      }
    }
  }
}
</style>
