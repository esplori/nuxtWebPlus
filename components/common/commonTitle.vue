<template>
  <div class="common-title">
    {{ props.title }}
    <i class="active-line"></i>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: { type: String, default: "" }
})
</script>
<style lang="scss" scoped>
.common-title {
  font-weight: bold;
  padding: 5px 0;
  font-size: 20px;
  border-bottom: 1px solid #f5f5f5;
  position: relative;
  margin-bottom: 20px;
  .active-line{
    display: inline-block;
    width: 80px;
    height: 2px;
    background-color: $primary;
    position: absolute;
    left: 0;
    bottom: -1px;
  }
}
</style>