import { nuxtContext } from '@nuxt/types'
import { coreFunctionList } from '@/types/ICore.ts'
import BannerFabric from '@/core/fabrics/modules/BannerFabric.ts'
import ProductFabric from '@/core/fabrics/modules/ProductFabric.ts'

const fabricList: coreFunctionList = [BannerFabric, ProductFabric]

export default (context: nuxtContext) => {
  class FabricsLocator {}

  context.$fabrics = new FabricsLocator()
  fabricList.forEach((fn) => fn(context))
}
