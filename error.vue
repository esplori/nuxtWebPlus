<template>
  <div class="not-found">
    <img src="@/assets/img/404.png" alt="" width="400px" style="margin:0 auto" />
    <div class="msg">抱歉，你访问的页面不存在</div>
    <div class="seconds">{{ seconds }} 秒后将跳转到首页</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      seconds: 5,
    };
  },
  mounted() {
    // 判断是否在客户端
    if (process.client) {
      setInterval(() => {
        this.seconds = this.seconds - 1;
        if (this.seconds <= 0) {
          this.seconds = 0
          location.href = "/";
        }
      }, 1000);
    }
  },
};
</script>
<style scoped lang="less">
.not-found {
  text-align: center;
  background: #fff;
  height: 600px;
  padding-bottom: 20px;

  .msg,
  .seconds {
    text-align: center;
  }
}
</style>