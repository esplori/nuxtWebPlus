<template>
  <div class="cus-nuxt-router-no-side">
    <commonHeader></commonHeader>
    <div class="router-box">
      <slot />
    </div>
    <commonfooter></commonfooter>
  </div>
</template>
<script setup lang="ts">
import commonHeader from "@/components/common/homeHeader.vue";
import commonfooter from "@/components/common/homeFooter.vue";
// import sideBar from "@/components/common/sideBar.vue";
</script>
<style lang="less" scoped>
.cus-nuxt-router-no-side {
  .router-box {
    max-width: 1200px;
    margin: 10px auto;

    .layout-nuxt-router-no-side {
      width: 100%;
    }
  }

  @media screen and (max-width: 1024px) {
    .layouts-sideBar {
      display: none;
    }
  }
}
</style>
