<template>
    <div class="tbk-container">
        <div class="home-body">
            <div class="big-tbk-item">
                <div>
                    <a :href="state.item.pict_url"><img :src="state.item.pict_url" alt="" width="197px"
                            height="197px" /></a>
                </div>
            </div>

            <div class="item-info">
                <div>
                    <h1 class="item-title">{{ state.item.title }}</h1>
                </div>
                <div class="volume">
                    月销量：<span>{{ state.item.volume }}</span> 笔
                </div>
                <div class="reserve_price">
                    原价：<span class="rmbicon">¥</span><span class="line-through">{{ state.item.reserve_price }}</span>
                </div>
                <div class="zk_final_price">
                    现价：<span class="rmbicon">¥</span>{{ state.item.zk_final_price }}
                </div>
                <div>
                    <div class="order-btn"><a class="order" :href="state.item.url" target="_blank">去下单</a></div>
                </div>
            </div>
        </div>
        <div>
            <h2 class="more">更多推荐</h2>
            <tbkBody :list="state.list"></tbkBody>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { getTbkDetailApi, getRecommendApi } from "../api";
import { reactive } from "vue"
import { toReactive } from "@vueuse/shared";
import tbkBody from "@/components/tbk/tbkBody.vue"

interface TbkItem {
    title?: string;
    pict_url?: string;
    reserve_price?: string;
    zk_final_price?: string;
    volume?: number;
    url?: string;
}

const route = useRoute()
// 使用泛型绑定类型，并初始化为空对象
let state = reactive<{
    list: any[];
    item: TbkItem;
}>({
    list: [],
    item: {} // 初始化为空对象
})

const getDetail = async () => {
    // 通过异步请求回来的数据都会存储在页面 payload 中。意味着，可能会存在没有用在你的组件的数据也加载到了 payload 中。我们强烈推荐你只选取必须使用在组件上的数据
    let { data } = toReactive(await useFetch(getTbkDetailApi + route.params.id)) as any;
    state.item = data.data.result

    useHead({
        title: state.item.title + " - javascript技术分享",
        meta: [
            { name: 'description', content: state.item.title + " - javascript技术分享" },
            { name: 'keywords', content: state.item.title }
        ]
    })
}

getDetail()

const getRecommend = async () => {
    // 通过异步请求回来的数据都会存储在页面 payload 中。意味着，可能会存在没有用在你的组件的数据也加载到了 payload 中。我们强烈推荐你只选取必须使用在组件上的数据
    let { data } = toReactive(await useFetch(getRecommendApi)) as any;
    state.list = data.data.result
}

getRecommend()
</script>

<style lang="scss" scoped>
.tbk-container {
    background: #fff;
    min-height: 768px;

    .home-body {
        display: flex;
        margin: 0 10px;

        .big-tbk-item {
            margin-top: 10px;
        }

        .item-info {
            padding: 0 20px;
            width: 100%;

            .item-title {
                display: block;
                // height: 40px;
                // line-height: 40px;
                // overflow: hidden;
                // margin: 8px 0;
                // color: #666;
                font-size: 1.6rem;
                line-height: 2rem;
            }

            .reserve_price {
                font-size: 16px;
                color: #999;

                .line-through {
                    text-decoration: line-through;
                }
            }
            .volume{
                font-size: 16px;
                color: #999;
            }

            .zk_final_price {
                line-height: 40px;
                font-size: 20px;
                color: #ff5000;
            }

            .order-btn {
                background: #ff5000;
                padding: 5px 0;
                border-radius: 4px;
                display: inline-block;
                width: 50%;

                .order {
                    color: #fff;
                    padding: 5px 0;
                    text-align: center;
                    width: 100%;
                    display: inline-block;
                }
            }

        }
    }

    // 适配移动端
    @media screen and (max-width: 1024px) {
        .home-body {
            flex-wrap: wrap;
        }

        .big-tbk-item {
            margin: 0 auto;
        }

        .order-btn {
            width: 100%;
            text-align: center;

            .order {
                display: inline-block;
                width: 100%;
            }
        }
    }

    .more {
        margin: 10px;
        border-bottom: 1px solid #f4f4f4;
    }
}
</style>