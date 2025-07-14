
<div><a href="https://github.com/esplori/nuxtWebPlus/blob/dev/README.md">中文</a>  |  <a href="https://github.com/esplori/nuxtWebPlus/blob/dev/README.en.md">English</a></div>

<h1 align="center" style="margin: 30px 0 30px; font-weight: bold;">nuxtWebPlus</h1>
<h4 align="center">基于nuxtjs3.0开发的博客系统</h4>
<p align="center">
	<a href="https://gitee.com/wilkwo/nuxt-web-plus.git"><img src="https://gitee.com/wilkwo/nuxt-web-plus/badge/star.svg?theme=dark"></a>
	<a href="https://gitee.com/wilkwo/nuxt-web-plus.git"><img src="https://gitee.com/wilkwo/nuxt-web-plus/badge/fork.svg?theme=dark"></a>
</p>


### 项目介绍：
 本项目基于[Nuxt3](https://nuxt.com/)创建的博客系统,可被搜索引擎正常爬取收录，可作为门户网站使用（如掘金/爱奇艺官网使用的就是Nuxt）。

### 主要技术栈:

 [nuxtjs 3.0](https://nuxt.com/docs/getting-started/introduction) 、[element-plus](https://element-plus.gitee.io/zh-CN/) 、typescript 、 sass

### 主要功能/页面：

- 文章列表
- 文章详情
- 文章推荐
- 文章评论
- 文章专题
- 网站导航

### 关联项目
- 官网：[https: //www.dsiab.com](https://www.dsiab.com)
- 博客首页开源项目: nuxtWebPlus (https://gitee.com/wilkwo/nuxt-web-plus.git) 
- 后台管理体验地址： https://admin.dsiab.com , 体验账号：test/test
- 加qq群一起交流：514450699

### nuxt优势：

- nuxt开发的项目能被搜索引擎收录，能进行seo。

- 上手简单，语法跟vue基本一致。

- 能正常接入统计跟广告代码。

### 已知使用nuxt的网站
- [掘金](https://juejin.cn/)
- [爱奇艺](https://www.iqiyi.com/)

tip: 通过浏览器检查功能可以看到[id="__nuxt"]元素

### 各分支区别
- master： 主干，通常是dev分支内容稳定后会同步到该分支
- dev： 开发分支，日常开发测试使用该分支
- pure: 纯净分支，该分支为应对备案检查而修改，无广告，干干净净。

### 如何启动应用

```bash
# 下载代码
git clone https://gitee.com/wilkwo/nuxt-web-plus.git

或者

git clone https://github.com/wilkwo/nuxt-web-plus.git


# 安装依赖
$ npm install
# 本地启动在 localhost:3000
$ npm run dev
# 部署到服务器，先build，再执行start启动
$ npm run build
# 生成静态项目
$ npm run generate
```

### 如何部署
   参考文章： [如何通过pm2部署nuxt3应用？](https://www.dsiab.com/post/d435197f-f03f-481b-9c4a-f33d2875d317)

### 注意

- 项目默认调用官网接口，数据跟官网同步
  
- 如果要使用本地接口，请修改/utils/baseUrl.js 文件中的baseUrl为自己服务地址

### 感谢赞赏

创作不易，你的赞赏和认可是持续更新的动力！

<img src="./assets/img/zanshan.jpeg" alt="赞赏" width="300px" />



