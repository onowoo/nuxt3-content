import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "../../node_modules/.pnpm/nuxt@3.10.3_eslint-ts-patch@8.56.0-0_rollup@2.79.1_typescript@5.4.2_vite@5.1.6_vue-tsc@1.8.27/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}