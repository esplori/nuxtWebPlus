<template>
  <div class="container">
      <div class="home-body">
        <tbkBody :list="state.list"></tbkBody>
      </div>
      <div style="text-align: center; background: #fff; padding: 20px 0">
          <nuxtPagination :pageSize="20" :total="state.total" :currentPage="state.page" :prePath="'/tbk/page/'">
          </nuxtPagination>
      </div>
  </div>
</template>

<script lang="ts" setup>
import { getShopListApi } from "../api";
import { reactive } from "vue"
import { toReactive } from "@vueuse/shared";
import nuxtPagination from "@/components/common/nuxtPagination.vue"
import tbkBody from "@/components/tbk/tbkBody.vue"
useHead({
    title: "优乐购-javascript技术分享",
    meta: [
      { name: 'description', content: "优乐购-javascript技术分享" },
      { name: 'keywords', content: "优乐购" }
    ]
  })
const route = useRoute()
let state = reactive({
  list: [],
  total: 0,
  page: 1
})
state.page = parseInt(route.params.id as any)
const getList = async () => {
  debugger
  // 通过异步请求回来的数据都会存储在页面 payload 中。意味着，可能会存在没有用在你的组件的数据也加载到了 payload 中。我们强烈推荐你只选取必须使用在组件上的数据
  let { data } = toReactive(await useFetch(getShopListApi + state.page)) as any;
  state.list = data.data.result
  state.total = data.data.total
}

getList()
</script>

<style lang="less" scoped>
.container {
  .home-body {
      display: flex;
      flex-wrap: wrap;
      background: #fff;

      .goodBodyComp {
          display: flex;
          flex-wrap: wrap;
          padding: 5px;

          .tbk-item:hover {
              border: 1px solid #ff5000;
          }

          .tbk-item {
              display: inline-block;
              width: 180px;
              padding: 8px;
              border: 1px solid #f4f4f4;
              cursor: pointer;
              background: #fff;

              .item-img{
                  width: 160px;
                  height: 160px;
              }

              .item-title {
                  display: block;
                  height: 40px;
                  line-height: 20px;
                  overflow: hidden;
                  margin: 8px 0;
                  color: #666;
                  font-size: 12px;
              }

              .item-sale-info {
                  color: #999;
                  display: flex;
                  justify-content: space-between;
                  align-items: baseline;

                  .zk_final_price {
                      color: #ff5000;
                      font-size: 18px;
                  }

                  .reserve_price {
                      color: #999;
                      font-size: 12px;
                      text-decoration: line-through;
                  }

                  .rmbicon {
                      font-size: 12px;
                  }

                  .volume {
                      font-size: 12px;
                  }
              }
          }
      }
  }
}
</style>
