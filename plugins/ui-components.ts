import { nuxtContext } from '@nuxt/types'

import VSlider from '@/components/UI/VSlider.vue'

const UIComponents = [{ name: 'VSlider', component: VSlider }]

export default defineNuxtPlugin((context: nuxtContext) => {
  UIComponents.forEach((item) => {
    context.vueApp.component(item.name, item.component)
  })
})
