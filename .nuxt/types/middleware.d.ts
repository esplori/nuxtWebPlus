import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/wilkwo/qdd/workspace/nuxt-web-plus/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}