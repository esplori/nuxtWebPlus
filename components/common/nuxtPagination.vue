<template>
  <el-divider></el-divider>
  <div class="nuxt-pagination">
    <ul>
      <li v-for="(item, index) in pageList" :key="index" :class="{ actived: propsState.currentPage === item }">
        <a v-if="item" :class="['num-item', item < 10 ? 'plus-width' : '']" :href="propsState.prePath + item">{{ item }}</a>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue"
let propsState = defineProps({
  total: {
    type: Number, default: 0
  },
  currentPage: { type: Number, default: 1 },
  pageSize: { type: Number, default: 10 },
  prePath: { type: String, default: "" }
})

let pageList = computed(() => {
  let totalPage = Math.ceil(propsState.total / propsState.pageSize);
  let list = []
  if (totalPage > 5) {
    let left1 = propsState.currentPage - 1 <= 0 ? "" : propsState.currentPage - 1;
    let left2 = propsState.currentPage - 2 <= 0 ? "" : propsState.currentPage - 2;
    list = [
      left2,
      left1,
      propsState.currentPage
    ]
    if (propsState.currentPage <= totalPage) {
      if (propsState.currentPage + 1 <= totalPage) {
        list = list.concat([propsState.currentPage + 1])
      }
      if (propsState.currentPage + 2 <= totalPage) {
        list = list.concat([propsState.currentPage + 2,])
      }
    } else {
      return
    }
    return list;
  } else {
    for (let index = 0; index < totalPage; index++) {
      list.push(index + 1);
    }
    return list;
  }
})
</script>

<style lang="scss">
.nuxt-pagination {
  ul {
    li {
      display: inline-block;
      margin-right: 20px;
      font-size: 0.8rem;

      .num-item {
        border: 1px solid $primary;
        padding: 5px 5px;
        border-radius: 2px;

        &.plus-width {
          padding: 5px 8px;
        }
      }

      &.actived {
        a {
          color: #fff;
          background-color: $primary;
        }
      }
    }
  }
}
</style>
