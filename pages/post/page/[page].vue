<template>
  <div class="post-page">
    <div class="home-body">
      <div class="left-body">
        <listBody :list="state.homeList.result"></listBody>
        <div class="home-pagination">
          <nuxtPagination
            :pageSize="10"
            :total="state.homeList.total"
            :currentPage="state.page"
          ></nuxtPagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getListApi } from "@/pages/post/index"
import { reactive } from "vue"
import { toReactive } from "@vueuse/shared";
import listBody from "@/components/common/pageListBody.vue"
import nuxtPagination from "@/components/common/nuxtPagination.vue"
useHead({
  title: "javascript技术分享",
  meta: [
    { name: 'description', content: "书写心得,分享感悟" },
    { name: 'keywords', content: "javascript技术分享,js技术,vuejs,web前端,前端开发,前端面试,web开发,dsiab,个人博客,前端博客" }
  ]
})
const route = useRoute()
let state = reactive({
  homeList: {
    result: [],
    total: 0
  },
  page: 0,
  total: 0
})
state.page = parseInt(route.params.page as any)

const getList = async () => {
  // 通过异步请求回来的数据都会存储在页面 payload 中。意味着，可能会存在没有用在你的组件的数据也加载到了 payload 中。我们强烈推荐你只选取必须使用在组件上的数据
  let { data } = toReactive(await useFetch(getListApi + route.params.page)) as any;
  state.homeList = data.data
}
getList()

</script>

<style lang="less" scoped>
.post-page {
  width: 100%;
  .home-body {
    display: flex;
    justify-content: space-between;
    .left-body {
      width: 100%;
      background: #fff;
      box-shadow: 0 1px 3px rgba(27, 95, 160, 0.1);
      .home-pagination {
        padding: 20px;
        background: #fff;
        text-align: center;
      }
    }
  }
}
</style>
