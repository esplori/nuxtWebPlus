<template>
  <div class="cate-id">
    <div class="home-body">
      <div class="left-body">
        <h1 class="result-title">关键字：{{ route.params.tag }}</h1>
        <p class="devide"></p>
        <listBody :list="state.homeList.result"></listBody>
        <div class="home-pagination">
          <nuxtPagination :pageSize="10" :total="state.homeList.total" :currentPage="state.page"
            :prePath="state.prePath"></nuxtPagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getListByTagsApi } from "@/pages/post/index"
import { reactive } from "vue"
import { toReactive } from "@vueuse/shared";
import listBody from "@/components/common/pageListBody.vue"
import nuxtPagination from "@/components/common/nuxtPagination.vue"
const route = useRoute()
let state = reactive({
  homeList: {
    result: [],
    total: 0
  },
  page: 1,
  prePath: "/post/tags/" + route.params.tag + "/"
})

useHead({
    title: route.params.tag + "-javascript技术分享",
    meta: [
      { name: 'description', content: route.params.tag + "-javascript技术分享" },
      { name: 'keywords', content: route.params.tag || "" }
    ]
  })
// 显示当前页码
state.page = parseInt(route.params.page as any || 1)
const getList = async () => {
  let { data } = toReactive(await useFetch(getListByTagsApi,{method: "get",params:{tag: encodeURI(route.params.tag as any),page: (route.params.page || 1)}} )) as any;
  state.homeList = data.data
}
getList()
</script>

<style lang="less" scoped>
.cate-id {
  width: 100%;

  .home-body {
    display: flex;
    justify-content: space-between;

    .left-body {
      width: 100%;
      background: #fff;
      box-shadow: 0 0 20px rgba(210, 211, 216, 0.3);

      .home-pagination {
        padding: 20px;
        background: #fff;
        text-align: center;
      }
    }
  }
}
</style>
