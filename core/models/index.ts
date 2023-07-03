import { nuxtContext } from '@nuxt/types'
import { coreFunctionList } from '@/types/ICore.ts'
import BannerModel from '@/core/models/modules/BannerModel.ts'

const modelList: coreFunctionList = [BannerModel]

export default (context: nuxtContext) => {
  class ModelsLocator {}

  context.$models = new ModelsLocator()
  modelList.forEach((fn) => fn(context))
}
