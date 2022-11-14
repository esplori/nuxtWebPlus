<template>
  <div class="cus-nuxt-router">
    <commonHeader></commonHeader>
    <div class="router-box">
      <div class="layout-nuxt-router">
        <slot  />
      </div>
      <sideBar class="layouts-sideBar"></sideBar>
    </div>
    <commonfooter></commonfooter>
  </div>
</template>
<script setup lang="ts">
import commonHeader from "@/components/common/homeHeader.vue";
import commonfooter from "@/components/common/homeFooter.vue";
import sideBar from "@/components/common/sideBar.vue";
</script>
<style lang="less" scoped>
.cus-nuxt-router {
  .router-box {
    max-width: 1200px;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;

    .layout-nuxt-router {
      width: 100%;
      max-width: 820px;
    }

    .layouts-sideBar {
      width: 385px;
    }
  }

  @media screen and (max-width: 1024px) {
    .layouts-sideBar {
      display: none;
    }
  }
}
</style>
