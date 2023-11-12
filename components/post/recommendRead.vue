<template>
  <div class="postRecommend" v-show="props.list.length">
    <commonTitle :title="'推荐阅读'"></commonTitle>
    <ul>
      <li v-for="(item, index) in props.list" :key="index">
        <span class="circle"></span><a :href="'/post/' + (item.uid || item.id)" target="_blank" rel="noopener noreferrer">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import commonTitle from "@/components/common/commonTitle.vue"
const props = defineProps({
  list: {
    type: Array, default: () => {
      return []
    }
  }
})
</script>
<style lang="scss">
.postRecommend {
  background-color: #fff;
  padding: 10px 20px;
  h3 {
    position: relative;
    left: -20px;
    font-size: 1.4rem;
  }

  ul {
    li {
      font-size: 1.2rem;
      padding: 2px 5px;
      display: flex;
      align-items: center;
      .circle{
        width: 4px;
        height: 4px;
        background-color: #2c2e3b;
        border-radius: 50%;
        margin-right: 8px;
      }
      a {
        text-decoration: none !important;
        ;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
