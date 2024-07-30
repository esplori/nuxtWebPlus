<template>
  <div class="cus-nuxt-router">
    <commonHeader></commonHeader>
    <div class="router-box">
      <div class="layout-nuxt-router">
        <slot></slot>
      </div>
    </div>
    <commonfooter></commonfooter>
  </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.cus-nuxt-router {
  .router-box {
    width: 100%;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
  }
}
</style>
