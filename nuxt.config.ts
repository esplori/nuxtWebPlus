// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=500, initial-scale=1,width=device-width',
      meta: [
        { name: 'description', content: '书写心得,分享感悟' },
        { "http-equiv": 'content-language', content: "zh-cn" },
        { name: 'keywords', content: 'javascript技术分享,js技术,vuejs,web前端,前端开发,前端面试,web开发,dsiab,个人博客,前端博客' },
      ],
      htmlAttrs: {'lang': "zh-cn"}
    }
  },
  css: [
    "element-plus/dist/index.css",
    "/assets/css/common.css"
  ],
  vite: {
    logLevel: "info",
    server: {
      proxy: {
        '/pages': {
          target: 'http://localhost:8082',
          // target: 'http://admin.dsiab.com/',
          changeOrigin: true
        }
      }
    }
  }
})
