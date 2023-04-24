<template>
  <div class="comments">
    <h3>发表评论：</h3>
    <el-form :model="state.form" label-width="60px">
      <el-form-item label="昵称：">
        <el-input v-model="state.form.username" placeholder="用于发表后名称显示"></el-input>
      </el-form-item>
      <el-form-item label="邮箱：">
        <el-input v-model="state.form.mail" placeholder="用于接收回复邮件"></el-input>
      </el-form-item>
      <el-form-item label="内容：">
        <el-input type="textarea" :rows="5" v-model="state.form.content" placeholder="平等交流，理解尊重"></el-input>
      </el-form-item>

      <el-form-item>
        <div style="text-align: right">
          <el-button @click="submit" type="primary">发表评论</el-button>
        </div>
      </el-form-item>
    </el-form>

    <div class="commentsList" v-show="state.commentsList.length">
      <h4>文章评论：</h4>
      <div
        v-for="(item, index) in state.commentsList"
        :key="index"
        class="comment-item"
      >
        <div>
          <i class="avatar"></i>
        </div>
        <div class="info">
          <div class="name">{{ item.username }}</div>
          <div class="createDate">{{ item.createDate }}</div>
          <div class="content">{{ item.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, onMounted } from "vue"
import { toReactive } from "@vueuse/shared";
import { addCommentApi } from "@/pages/post/index"
let state = reactive({
  form: {
    username: "",
    content: "",
    mail:"",
    postId: ""
  },
  commentsList: []
})
const submit = async () => {
  // 通过异步请求回来的数据都会存储在页面 payload 中。意味着，可能会存在没有用在你的组件的数据也加载到了 payload 中。我们强烈推荐你只选取必须使用在组件上的数据
  await useFetch(addCommentApi,{ method: 'post',body: state.form} );
}
</script>
<style lang="less" scoped>
.comments {
  width: 100%;
  margin-top: 20px;
  padding: 20px;
  .commentsList {
    margin-top: 40px;
    background: #fff;
    border-top: 1px solid #f5f5f5;
    .comment-item {
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 5px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      .info {
        margin-left: 10px;
        .name {
          font-size: 16px;
          padding-bottom: 5px;
          font-weight: 600;
        }
        .createDate {
          font-size: 12px;
        }
        .content {
          padding: 10px 0;
          font-size: 14px;
        }
      }

      .avatar {
        display: inline-block;
        width: 36px;
        height: 36px;
        background: url("@/assets/img/avatar.png") no-repeat;
        background-size: contain;
      }
    }
  }
}
</style>
