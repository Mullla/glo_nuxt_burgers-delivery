import { nuxtContext } from '@nuxt/types'
import { coreFunctionList } from '@/types/ICore.ts'
import Endpoints from '@/core/configs/modules/Endpoints.ts'
import Enums from '@/core/configs/modules/Enums.ts'

const configList: coreFunctionList = [Endpoints, Enums]

export default (context: nuxtContext) => {
  class ConfigsLocator {}

  context.$configs = new ConfigsLocator()
  configList.forEach((fn) => fn(context))
}
