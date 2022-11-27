<template>
    <div class="goodBodyComp">
        <a class="tbk-item" v-for="(item, index) in propState.list" :key="index" :href="'/tbk/detail/' + item.pid"
            target="_blank">
            <div>
                <img :src="item.pict_url" alt="" class="item-img" />
                <div class="item-title">{{ item.title }}</div>
                <div class="item-sale-info">
                    <div>
                        <a class="zk_final_price"><span class="rmbicon">¥</span>{{ item.zk_final_price }}</a>
                        <a class="reserve_price"><span class="rmbicon">¥</span>{{ item.reserve_price }}</a>
                    </div>
                    <div class="volume">月销{{ item.volume }}+笔</div>
                </div>
            </div>
        </a>
    </div>
</template>
<script lang="ts" setup>
let propState = defineProps({
    list: []
})
</script>
<style lang="less">
.goodBodyComp {
    display: flex;
    flex-wrap: wrap;
    padding: 5px;

    .tbk-item:hover {
        border: 1px solid #ff5000;
    }

    .tbk-item {
        display: inline-block;
        width: 180px;
        padding: 8px;
        border: 1px solid #f4f4f4;
        cursor: pointer;
        background: #fff;

        .item-img {
            width: 160px;
            height: 160px;
        }

        .item-title {
            display: block;
            height: 40px;
            line-height: 20px;
            overflow: hidden;
            margin: 8px 0;
            color: #666;
            font-size: 12px;
        }

        .item-sale-info {
            color: #999;
            display: flex;
            justify-content: space-between;
            align-items: baseline;

            .zk_final_price {
                color: #ff5000;
                font-size: 18px;
            }

            .reserve_price {
                color: #999;
                font-size: 12px;
                text-decoration: line-through;
            }

            .rmbicon {
                font-size: 12px;
            }

            .volume {
                font-size: 12px;
            }
        }
    }
}
</style>
  