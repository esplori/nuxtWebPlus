<template>
  <el-carousel indicator-position="outside" height="330px" class="car-item">
    <el-carousel-item v-for="(item, index) in state.carouselList.slice(
      0,
      state.carouselList.length - 2
    )" :key="index">
      <div class="carousel-item-container">
        <a :href="item.url" target="_blank"><img :src="item.imgUrl" alt="" style="height: 330px; width: 100%" /></a>
        <div class="carousel-item-desc">{{ item.desc }}</div>
      </div>
    </el-carousel-item>
  </el-carousel>
  <div class="small-carousel">
    <div class="small-carousel-item">
      <img :src="state.carouselList[state.carouselList.length - 2].imgUrl" alt="" class="small-carousel-img" />
      <div class="sml-car-title">
        <a target="_blank" :href="state.carouselList[state.carouselList.length - 2].url">{{
          state.carouselList[state.carouselList.length - 2].desc
        }}</a>
      </div>
    </div>
    <div class="small-carousel-item">
      <img :src="state.carouselList[state.carouselList.length - 1].imgUrl" alt="" class="small-carousel-img" />
      <div class="sml-car-title">
        <a target="_blank" :href="state.carouselList[state.carouselList.length - 1].url">{{
          state.carouselList[state.carouselList.length - 1].desc
        }}</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  state: { type: String, default: {} }
})
</script>
<style lang="scss" scoped>
.car-item {
  width: 100%;
}

.carousel-item-container {
  position: relative;
  cursor: pointer;

  .carousel-item-desc {
    width: 100%;
    padding: 10px;
    position: absolute;
    bottom: 8px;
    left: 0;
    background: #000;
    color: #fff;
    opacity: 0.8;
    text-align: center;
  }
}

.small-carousel {
  margin-left: 10px;
  width: 365px;
  padding: 0 0 20px 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .small-carousel-item {
    height: 160px;
    margin-bottom: 10px;
    background: #828a92;
    position: relative;

    .small-carousel-img {
      /*width: 245px;*/
      height: 160px;
    }

    .sml-car-title {
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      color: #fff;
      background: #000;
      text-align: center;
      opacity: 0.8;
      padding: 10px 0;
      font-size: 12px;

      a {
        color: #fff;
      }
    }
  }
}
</style>