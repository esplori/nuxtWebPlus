<template>
  <div class="project-container">
    <common></common>
  </div>
</template>
<script lang="ts" setup>
import common from "./components/common.vue"
// layout 需使用中划线
definePageMeta({
  layout: 'full_screen',
});
useHead({
  title: "项目分享 - javascript技术分享",
  meta: [
    { name: 'description', content: "项目分享 - javascript技术分享" },
    { name: 'keywords', content: "项目分享" }
  ]
})

</script>
