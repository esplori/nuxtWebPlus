// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modern: "client",
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      meta: [
        { name: 'description', content: '书写心得,分享感悟' },
        { "http-equiv": 'content-language', content: "zh-cn" },
        { 'http-equiv': 'Content-Security-Policy', content: 'upgrade-insecure-requests' },
        { name: 'keywords', content: 'javascript技术分享,js技术,vuejs,web前端,前端开发,前端面试,web开发,dsiab,个人博客,前端博客' },
      ],
      script: [
        {
          src: "https://hm.baidu.com/hm.js?96ab5c4cd236e8e96687d2dab55e7034",
          async: true,  // 添加defer属性延迟加载
          body: true, // 让js在body中加载 
        },
        {
          src: "https://source.dsiab.com/plugins/webstatistics.js",
          defer: true,
          body: true,
        },
        {
          src: "https://cpro.baidustatic.com/cpro/ui/cm.js",
          defer: true,
          body: true,
        },
         {
          src: "https://www.googletagmanager.com/gtag/js?id=G-HX495VD0E0",
          defer: true,
          body: true,
        },
      ],
      htmlAttrs: { 'lang': "zh-cn" }
    }
  },
  css: [
    "/assets/css/common.css",
  ],
  modules: [
    '@element-plus/nuxt'
  ],
  vite: {
    // logLevel: "info",
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/common.scss" as *;'
        }
      }
    },
    server: {
      proxy: {
        '/portal-service': {
          // 本地代理，评论部分需开启本地代理
          target: 'http://localhost:8082',
          // target: 'http://admin.dsiab.com/',
          changeOrigin: true,
          rewrite: path => path.replace('portal-service', '')
        }
      }
    }
  }
})
