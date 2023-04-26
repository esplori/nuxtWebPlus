<template>
  <div class="postRecommend" v-show="props.list.length">
    <h3>推荐阅读：</h3>
    <ul>
      <li v-for="(item, index) in props.list" :key="index">
        <a
          :href="'/post/' + (item.uid || item.id)"
          target="_blank"
          rel="noopener noreferrer"
          >{{ item.title }}</a
        >
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  list: { type: Array, default: () =>{
    return []
  } }
})
</script>
<style lang="less">
.postRecommend {
  padding: 0 20px;
  h3{
    position: relative;
    left: -20px;
    font-size: 1.4rem;
  }
  
  ul {
    li {
      font-size: 1.2rem;
      list-style-type: disc;
      padding: 2px 0;
      a{
        text-decoration: none !important;;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
