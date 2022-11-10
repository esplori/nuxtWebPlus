// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'about', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=500, initial-scale=1', 
      title: 'My App',
      meta: [
        { name: 'description', content: 'My amazing site.' }
      ],
    }
  }
})
