<template>
    <div class="container">
        <div class="home-body">
            <h2 style="border-bottom: 1px solid #f5f5f5;">专题</h2>
            <ul class="topic-ul">
                <li v-for="(item, index) in state.list" :key="index">
                    <a :href="'/post/' + (item.postId)" target="_blank" class="post-item">{{ item.name }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import { getTopicDetailList } from "./api";
import { toReactive } from "@vueuse/shared";
const route = useRoute()

let state = reactive({
    list: [{ name: "", postId: "" }]
})
useHead({
    title: "专题" + " - javascript技术分享",
    meta: [
        { name: 'description', content: "专题" + " - javascript技术分享" },
        { name: 'keywords', content: "专题" }
    ]
})
const getList = async () => {
    // 通过异步请求回来的数据都会存储在页面 payload 中。意味着，可能会存在没有用在你的组件的数据也加载到了 payload 中。我们强烈推荐你只选取必须使用在组件上的数据
    let { data } = toReactive(await useFetch(getTopicDetailList, { method: 'get', params: { topicId: route.params.id } })) as any;
    state.list = data.data.result
}
getList()
</script>
  
<style lang="less" scoped>
.container {
    background: #fff;
    padding: 20px;

    .home-body {
        .post-item {
            font-size: 1.2rem;

            &:hover {
                text-decoration: underline;
            }
        }

        .topic-ul {
            padding-left: 20px;

            li {
                list-style-type: decimal;
            }
        }
    }
}
</style>