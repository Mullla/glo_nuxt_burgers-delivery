import { nuxtContext } from '@nuxt/types'

import setConfigs from '@/core/configs/index.ts'
import setModels from '@/core/models/index.ts'
import setFabrics from '@/core/fabrics/index.ts'
import setAdapters from '@/core/adapters/index.ts'
import setApi from '@/core/api/index.ts'
import setServices from '@/core/services/index.ts'

export default defineNuxtPlugin((context: nuxtContext) => {
  setConfigs(context)
  setModels(context)
  setFabrics(context)
  setAdapters(context)
  setApi(context)
  setServices(context)
})
