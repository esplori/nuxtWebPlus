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
// 显示当前页码
state.page = parseInt(route.params.page as any || 1)
const getList = async () => {
  let url = getListByTagsApi + encodeURI(route.params.tag) + '/page/' + (route.params.page || 1)
  let { data } = toReactive(await useFetch(url)) as any;
  state.homeList = data.data
}
getList()
// import { getListByTagsApi } from "../index";
// export default {
//   components: {
//     listBody: () => import("@/components/home/pageListBody.vue"),
//     nuxtPagination: () => import("@/components/common/nuxtPagination.vue"),
//   },
//   head() {
//     return {
//       title: `${this.tag}-javascript技术分享`,
//       meta: [
//         {
//           hid: "description",
//           name: "description",
//           content: `${this.tag}`,
//         },
//         {
//           hid: "keywords",
//           name: "keywords",
//           content: `${this.tag}`,
//         },
//       ],
//     };
//   },
//   async asyncData({ route }) {
//     let [homeList] = await Promise.all([
//       getListByTagsApi({ tag: route.params.id, page: route.params.page || 1 }),
//     ]);
//     return {
//       homeList: homeList.data,
//       page: parseInt(route.params.page || 1),
//       tag: route.params.id,
//     };
//   },
//   computed: {
//     prePath() {
//       return "/post/tags/" + this.tag + "/";
//     },
//   },
// };
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
