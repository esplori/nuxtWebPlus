<template>
  <div class="nuxt-router">
    <commonHeader></commonHeader>
    <div class="router">
      <slot />
    </div>
    <commonfooter></commonfooter>
  </div>
</template>
<script setup lang="ts">
import commonHeader from "@/components/common/homeHeader.vue";
import commonfooter from "@/components/common/homeFooter.vue";
</script>
<style lang="less" scoped>
.nuxt-router {
  .router {
    max-width: 1200px;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;

    .nuxt-router {
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
