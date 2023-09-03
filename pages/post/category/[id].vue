<template>
  <div class="cate-id">
    <div class="home-body">
      <div class="left-body">
        <div style="padding:0 20px" v-if="state.homeList.result.length">
          <commonTitle :title="'分类：'+  state.homeList.result[0].cateName"></commonTitle>
        </div>
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
import { getListByCateApi } from "@/pages/post/index"
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
  prePath: "/post/category/" + route.params.id + "/"
})
// 显示当前页码
state.page = parseInt(route.params.page as any || 1)

const getList = async () => {
  let { data } = toReactive(await useFetch(getListByCateApi,{method:"get",params:{cate: route.params.id, page:  (route.params.page || 1)}})) as any;
  state.homeList = data.data

  useHead({
    title: state.homeList.result[0].cateName + " - javascript技术分享",
    meta: [
      { name: 'description', content: state.homeList.result[0].cateName + " - javascript技术分享" },
      { name: 'keywords', content: state.homeList.result[0].cateName || "" }
    ]
  })

}
getList()
</script>

<style lang="scss" scoped>
.cate-id {
  width: 100%;

  .home-body {
    display: flex;
    justify-content: space-between;
    border-radius: 5px;

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
