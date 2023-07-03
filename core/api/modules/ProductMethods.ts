import { nuxtContext } from '@nuxt/types'

export default (context: nuxtContext) => {
  class ProductMethods {
    private static endpoints = context.$configs.endpoints

    async getProducts(params = {}) {
      const config = ProductMethods.endpoints.product.getProducts(params)
      const result = await context.$services.useApi.request({ config })

      return result
    }
  }

  context.$api.product = new ProductMethods()
}
