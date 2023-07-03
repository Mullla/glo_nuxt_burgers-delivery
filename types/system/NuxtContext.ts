import { Context } from '@nuxt/types'

declare module '@nuxt/types' {
  interface nuxtContext extends Context {
    $services: any
    $models: any
    $fabrics: any
    $configs: any
    $api: any
    $adapters: any

    vueApp: any
  }
}
