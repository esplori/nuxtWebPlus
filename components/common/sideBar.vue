<template>
  <div class="side-bar">
    <ul>
      <li>
        <div class="search">
          <el-input size="large" placeholder="请输入关键字搜索" v-model="state.searchWords">
            <template #append>
              <el-button :icon="Search" @click="search" @keypress.enter="search" />
            </template>
          </el-input>
        </div>
      </li>
      <li v-show="state.siteInfo.ad_switch == 'Y'">
        <div class="_oi1z2s14bx"></div>
      </li>
      <div v-show="state.siteInfo.ad_switch == 'Y'" class="_clzacg58dkb"></div>
      <li>
        <div class="module category">
          <commonTitle :title="'专题推荐'"></commonTitle>
          <el-carousel indicator-position="outside" height="140px" class="car-item">
            <el-carousel-item v-for="(item, index) in state.topicList" :key="index">
              <div class="carousel-item-container">
                <a :href="'/topic/' + item.id" target="_blank"><img
                    src="https://source.dsiab.com/upload/cf172b78-9a2b-4ed3-8ae8-18ecaf612d98.jpg" alt=""
                    style="height: 140px; width: 100%" /></a>
                <div class="carousel-item-desc">{{ item.name }}</div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </li>
      <li>
        <div class="module">
          <commonTitle :title="'推荐阅读'"></commonTitle>
          <!-- <el-tabs v-model="state.activeName" @tab-click="handleClick">
            <el-tab-pane label="最近30天" name="30"></el-tab-pane>
            <el-tab-pane label="本年度" name="365"></el-tab-pane>
            <el-tab-pane label="总排行" name="all"></el-tab-pane>
          </el-tabs> -->
          <ul>
            <li v-for="(item, index) in state.recommandList" :key="index" class="li-item">
              <div class="title">
                <a :href="'/post/' + (item.uid || item.id)" target="_self">
                  <span class="list-index">{{ index + 1 }}</span>{{ item.title }}
                </a>
              </div>
              <div class="excerpt">
                <span class="views"> 阅读：{{ item.views }}</span>
                <span class="views published-date"> 发布时间：{{ item.createDate }}</span>
              </div>
            </li>
          </ul>
        </div>
      </li>
      <!-- <li>
        <div class="module category">
          <div class="cate">分类推荐</div>
          <ul>
            <li v-for="(item, index) in state.cateList" :key="index">
              <a :href="'/post/category/' + item.id">{{ item.name }}</a>
            </li>
          </ul>
        </div>
      </li> -->
      <!-- <li>
        <div class="module tags">
          <div class="cate">标签云</div>
          <ul>
            <li v-for="(item, index) in state.tagsList" :key="index" style="display: inline-block">
              <a :href="'/post/tags/' + item.keyword"><span class="tag-item"
                  :style="{ background: randomRgbColor() }">{{ item.keyword }}</span></a>
            </li>
          </ul>
        </div>
      </li> -->
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import { reactive, onMounted } from "vue"
import { toReactive } from "@vueuse/shared";
import { getRecomListApi, getCateApi, getTagsApi, getTopicListApi,getSiteInfoApi } from "@/pages/post/index";
import { ElMessage } from "element-plus"
import commonTitle from "@/components/common/commonTitle.vue"
const state = reactive({
  searchWords: "",
  activeName: "6month",
  recommandList: [],
  cateList: [],
  tagsList: [],
  topicList: [],
  siteInfo:{}
})

const getRecomList = async (activeName: any) => {
  let url = getRecomListApi + activeName
  let { data } = toReactive(await useFetch(url, { method: "get" })) as any;
  state.recommandList = data.data
}
getRecomList(state.activeName)

const getCate = async () => {
  let url = getCateApi
  let { data } = toReactive(await useFetch(url, { method: "get" })) as any;
  state.cateList = data.data.result.slice(0, 12)
}
getCate()

const getTags = async () => {
  let url = getTagsApi
  let { data } = toReactive(await useFetch(url, { method: "get" })) as any;
  state.tagsList = data.data.result
}
// getTags()

const getTopicList = async () => {
  let url = getTopicListApi
  let { data } = toReactive(await useFetch(url, { method: "get" })) as any;
  state.topicList = data.data.result
}
getTopicList()



const search = () => {
  if (!state.searchWords) {
    ElMessage.warning("请输入搜索关键字");
    return;
  }
  window.open("/post/tags/" + state.searchWords);
}

const handleClick = () => {
  getRecomList(state.activeName);
}

const randomRgbColor = () => {
  // 随机生成RGB颜色
  let colorList = ["#409eff", "#67c23a", "#e6a23c", "#f56c6c"];
  //随机生成5种颜色中的其中一种
  let max = 3;
  let min = 0;
  return colorList[Math.floor(Math.random() * (max - min + 1) + min)];
}

/**
 * 异步获取网站配置信息，并更新 state 中的相关数据
 */
const getSiteInfo = async () => {
  // 使用 VueUse 的 useFetch 函数获取数据，并转换为 reactive 对象
  let { data } = toReactive(await useFetch(getSiteInfoApi, { method: 'get' })) as any;
  state.siteInfo = data.data
  
}

// 获取网站配置信息
getSiteInfo()

onMounted(() => {
  if (process.client) {
    (window.slotbydup = window.slotbydup || []).push({
      id: "u6324348",
      container: "_oi1z2s14bx",
      async: true,
    });
    // side 2
    (window.slotbydup = window.slotbydup || []).push({
      id: "u6324827",
      container: "_clzacg58dkb",
      async: true,
    });
    // 监听键盘enter键，回车就执行搜索
    window.addEventListener("keypress", (key) => {
      if (key.code === "Enter") {
        search();
      }
    });
  }
})





</script>

<style lang="scss" scoped>
@media (max-width: 575.98px) {
  ._oi1z2s14bx {
    display: none;
  }

  ._clzacg58dkb {
    display: none;
  }
}

.side-bar {
  padding: 20px;
  margin-left: 10px;
  box-shadow: 0 0 20px rgba(210, 211, 216, 0.3);
  background: #fff;

  .el-tabs__nav-wrap::after {
    height: 0;
  }
}

.side-bar>ul>li {
  padding: 15px 0;

  .module {
    .carousel-item-container {
      position: relative;
      cursor: pointer;

      .carousel-item-desc {
        width: 100%;
        padding: 8px;
        position: absolute;
        bottom: 0;
        font-size: 1.2rem;
        left: 0;
        background: #000;
        color: #fff;
        opacity: 0.8;
        text-align: center;
      }
    }

    .cate {
      padding: 10px 0;
      border-bottom: 1px solid #eaeeef;
      // font-weight: 600;
      font-size: 1.6rem;
      color: #2c2e3b;
    }

    .li-item {
      &:first-child {
        .list-index {
          background-color: #f00606;
          color: #fff;
        }
      }

      &:nth-child(2) {
        .list-index {
          background-color: #f24808;
          color: #fff;
        }
      }

      &:nth-child(3) {
        .list-index {
          background-color: #fb7818;
          color: #fff;
        }
      }
    }
  }

  .module>ul>li {
    padding: 5px 0;
    border-bottom: 1px solid #eaeeef;

    a:hover {
      color: #06c;
    }

    .title {
      font-size: 14px;
      padding: 5px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 1.2rem;
    }

    .excerpt {
      // color: #828a92;
      font-size: 12px;
      opacity: 0.65;
    }

    .views {
      font-size: 12px;
      // color: #999;
    }

    .list-index {
      color: #828a92;
      background: #e6f1fb;
      padding: 0 5px;
      margin-right: 10px;
      border-radius: 2px;
    }
  }

  .category>ul>li {
    display: inline-block;
    width: 50%;
    border-bottom: 1px dotted #f5f5f5;
    font-size: 1.2rem;
  }

  .module.tags {
    .tag-item {
      display: inline-block;
      padding: 2px 10px;
      color: #fff;
      margin-right: 5px;
      border-radius: 2px;
      line-height: 20px;
      font-size: 14px;
    }
  }

  .published-date {
    margin-left: 20px;
  }
}
</style>
