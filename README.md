
<div><a href="https://gitee.com/wilkwo/nuxt-web/blob/master/README.md">中文</a>  |  <a href="https://gitee.com/wilkwo/nuxt-web/blob/master/README.en.md">english</a></div>

<h1 align="center" style="margin: 30px 0 30px; font-weight: bold;">nuxtWebPlus</h1>
<h4 align="center">基于nuxtjs3.0开发的博客系统</h4>
<p align="center">
	<a href="https://gitee.com/wilkwo/nuxt-web.git"><img src="https://gitee.com/wilkwo/nuxt-web/badge/star.svg?theme=dark"></a>
	<a href="https://gitee.com/wilkwo/nuxt-web.git"><img src="https://gitee.com/wilkwo/nuxt-web/badge/fork.svg?theme=dark"></a>
</p>


### 项目介绍：

- 主要技术: [nuxtjs 3.0](https://nuxt.com/docs/getting-started/introduction) 、[element-plus](https://element-plus.gitee.io/zh-CN/)



### 关联项目

* 后台管理项目： <a href="https://gitee.com/wilkwo/vueAdmin">vueAdmin</a>

* 后台管理地址：https://admin.dsiab.com

- 体验账号： test / test
  


### 演示地址

* 官网：[https: //www.dsiab.com](https://www.dsiab.com)



### 选择nuxtjs的原因：

- nuxt开发的项目能被搜索引擎收录，能进行seo。

- 上手简单，语法跟vue基本一致，部分写法有差异，只需要将文件按目录新建好，nuxt会自动生成对应路由。

- 能正常接入统计跟广告代码

### 如何启动应用

```bash
# 下载代码
github: git clone https://gitee.com/wilkwo/nuxt-web-plus.git
# 安装依赖
$ npm install
# 本地启动在 localhost:3000
$ npm run dev
# 部署到服务器，先build，再执行start启动
$ npm run build
# 生成静态项目
$ npm run generate
```

* 默认调用官网接口，数据跟官网同步
  
* 如果要使用本地接口，请修改/plugins/baseUrl.js 文件中的baseUrl
  
* 如果想要在浏览器端调用接口，请修改nuxt.config.js文件中的proxy, 将对应接口转发至本地服务即可

### 感谢赞赏

创作不易，你的赞赏和认可是持续更新的动力！

<img src="./assets/img/zanshan.jpeg" alt="赞赏" width="400px" />



