<template>
  <div class="pageListBody">
    <ul v-show="props.list.length">
      <li v-for="(item, index) in props.list" :key="index">
        <div class="post-item">
          <div class="item-info">
            <div class="home-post-title">
              <a :href="'/post/' + (item.uid || item.id)" target="_blank">{{
                item.title
              }}</a>
            </div>

            <div class="home-post-excerpt">
              {{ delHtmlTag(item.content) }}
            </div>
            <div class="home-post-info">
              <span class="create-date">
                发布时间：{{ item.createDate }}
              </span>
              <span class="views"> 阅读：{{ item.views }} </span>
              <span class="cate-name" v-show="item.cateName">
                <a :href="'/post/category/' + item.cate">
                  分类：{{ item.cateName || "" }}</a
                >
              </span>
             
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div v-show="!props.list.length">
      <h2 class="no-data">暂无数据</h2>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { delHtmlTag } from "@/assets/js/utils";
const props = defineProps({
  list: { type: Array, default: [] }
})

</script>
<style lang="less">
@media (max-width: 575.98px) {
  .img-box {
    display: none;
  }
}
.pageListBody {
  .no-data {
    text-align: center;
  }
  ul {
    li {
      padding: 10px 20px;
      // border-bottom: 1px solid #f5f5f5;
      .home-post-title {
        padding: 5px 0;
      }
      .home-post-title a {
        color: #424242;
        font-size: 1.4rem;
        line-height: 1.6rem;
        text-overflow: ellipsis;
      }
      .home-post-title a:hover {
        color: #06c;
      }
      // 文字超出显示...
      .home-post-excerpt {
        padding: 10px 0;
        line-height: 22px;
        font-size: 1rem;
        // color: #8c8c8c;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        opacity: 0.65;
      }
      .home-post-info {
        padding: 5px 0;
        font-size: .8rem;
        opacity: 0.65;
        // color: #8c8c8c;
        border-bottom: 1px dashed #ddd;
        span {
          margin-right: 15px;
        }
        .cate-name a {
          font-weight: 400;
          line-height: 18px;
        }
      }
      .post-item {
        display: flex;
        align-items: center;
        .item-info {
          width: 100%;
        }
        .img-box {
          width: 150px;
          height: 115px;
          margin-right: 20px;
          .item-img {
            border-radius: 5px;
          }
        }
      }
    }
    // li:hover {
    //   background: #f9fafb;
    //   box-shadow: 0 1px 3px rgba(27, 95, 160, 0.1);
    // }
  }
}
</style>
