// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page' },
    layoutTransition: { name: 'layout' }
  },
  runtimeConfig: {
    public: {
      baseApiUrl: process.env.API_BASE_URL,
      nodeEnv: process.env.NODE_ENV
    }
  },
  css: ['~/assets/styles/index.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
             @import "@/assets/styles/global/colors.scss";
             @import "@/assets/styles/global/vars.scss";
             @import "@/assets/styles/global/mixins.scss";
           `
        }
      }
    }
  },
  modules: [
    '@nuxtjs/stylelint-module',
    '@nuxtjs/eslint-module',
    ['@pinia/nuxt', { disableVuex: false }],
    'nuxt-icons',
    [
      'nuxt-lazy-load',
      {
        loadingClass: 'isImageLoading',
        directiveOnly: true
      }
    ]
  ]
})
