import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/Users/wilkwo/qdd/workspace/nuxt-web-plus/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}