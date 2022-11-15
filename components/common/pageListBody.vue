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
                {{ item.createDate }}
              </span>
              <span class="views"> 阅读({{ item.views }}) </span>
              <span class="cate-name" v-show="item.cateName">
                <a :href="'/post/category/' + item.cate">
                  {{ item.cateName || "" }}</a
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
const props = defineProps({
  list: { type: Array, default: [] }
})
import { delHtmlTag } from "@/assets/js/utils";
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
        font-size: 1.6rem;
        text-overflow: ellipsis;
      }
      .home-post-title a:hover {
        color: #06c;
      }
      // 文字超出显示...
      .home-post-excerpt {
        padding: 10px 0;
        line-height: 22px;
        font-size: 1.2rem;
        color: #8c8c8c;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .home-post-info {
        padding: 5px 0;
        font-size: 12px;
        color: #424242;
        // border-top: 1px dashed #ddd;
        border-bottom: 1px dashed #ddd;
        span {
          margin-right: 10px;
        }
        .cate-name a {
          font-weight: 400;
          line-height: 18px;
          // color: #828a92;
        }
        .create-date {
          // color: #828a92;
        }
        .views {
          // color: #828a92;
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
