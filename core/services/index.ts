import { nuxtContext } from '@nuxt/types'
import { coreFunctionList } from '@/types/ICore.ts'
import BannerService from '@/core/services/modules/BannerService.ts'
import ProductService from '@/core/services/modules/ProductService.ts'
import APIClientService from '@/core/services/modules/APIClientService.ts'

const servicesList: coreFunctionList = [APIClientService, BannerService, ProductService]

export default (context: nuxtContext) => {
  class ServicesLocator {}

  context.$services = new ServicesLocator()
  servicesList.forEach((fn) => fn(context))
}
