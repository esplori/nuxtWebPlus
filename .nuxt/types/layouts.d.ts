import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "no-side"
declare module "C:/workspace/nuxt-web-plus/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}