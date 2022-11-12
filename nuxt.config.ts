// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=500, initial-scale=1',
      title: 'My App',
      meta: [
        { name: 'description', content: 'My amazing site.' }
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
