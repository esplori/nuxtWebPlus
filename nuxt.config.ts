// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=500, initial-scale=1,width=device-width',
      title: 'javascript技术分享',
      meta: [
        { name: 'description', content: '书写心得,分享感悟' },
        { name: 'keywords', content: 'javascript技术分享,js技术,vuejs,web前端,前端开发,前端面试,web开发,dsiab,个人博客,前端博客' },
      ],
    }
  },
  css: [
    "element-plus/dist/index.css",
    "/assets/css/common.css"
  ],
  vite: {
    server: {
      proxy: {
        '/bootService': {
          // target: 'http://localhost:8091/'
          target: 'http://admin.dsiab.com/',
        }
      }
    }
  }
})
