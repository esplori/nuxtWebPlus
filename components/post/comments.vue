<template>
  <div class="comments">
    <h3>发表评论<span style="color:gray;font-size: 1rem;">(审核通过后显示评论)</span>：</h3>
    <el-form :model="state.form" label-width="70px" :rules="rules" ref="ruleFormRef">
      <el-form-item label="昵称：" prop="username">
        <el-input v-model="state.form.username" placeholder="用于发表后名称显示"></el-input>
      </el-form-item>
      <el-form-item label="邮箱：" prop="mail">
        <el-input v-model="state.form.mail" placeholder="用于接收回复邮件"></el-input>
      </el-form-item>
      <el-form-item label="内容：" prop="content">
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
      <div v-for="(item, index) in state.commentsList" :key="index" class="comment-item">
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
import { reactive, watch, ref } from "vue"
import { addCommentApi, getCommentByPostIdApi } from "@/pages/post/index"
import { useRoute } from "vue-router"
import { ElMessage } from "element-plus"

const route = useRoute()
let state = reactive({
  form: {
    username: "",
    content: "",
    mail: "",
    postId: route.params.id
  },
  commentsList: [],
})
const rules = reactive({
  username: [
    { required: true, message: '请输入昵称', trigger: 'blur' },
  ],
  mail: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
  ],
  content: [
    { required: true, message: '请输入内容', trigger: 'blur' },
  ]
})
const ruleFormRef = ref()

const getCommentList = async () => {
  let { data } = await useFetch(getCommentByPostIdApi, { method: "get", params: { postId: state.form.postId } })
  // 在浏览器端请求接口通过监听实现数据异步显示
  watch(data, (newPosts: any) => {
    state.commentsList = newPosts.data
    // Because posts starts out null, you will not have access
    // to its contents immediately, but you can watch it.
  })
}
const submit = async () => {
  if (!await ruleFormRef.value.validate()) {
    return false
  }
  // 浅克隆重新保存数据，否则再次在输入框中输入内容后会不断出发接口
  let newForm = JSON.parse(JSON.stringify(state.form))

  // 通过异步请求回来的数据都会存储在页面 payload 中。意味着，可能会存在没有用在你的组件的数据也加载到了 payload 中。我们强烈推荐你只选取必须使用在组件上的数据
  await useFetch(addCommentApi, { method: 'post', body: newForm }).then(res => {
    debugger
    ElMessage.success("提交成功");
    state.form.content = ""
    state.form.mail = ""
    state.form.username = ""
    getCommentList()
  });
}
// 浏览器端请求接口
if (process.client) {
  getCommentList()
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
