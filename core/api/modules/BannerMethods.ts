import { nuxtContext } from '@nuxt/types'

export default (context: nuxtContext) => {
  class BannerMethods {
    private static endpoints = context.$configs.endpoints

    async getBanners(params = {}) {
      const config = BannerMethods.endpoints.banner.getBanners(params)
      const result = await context.$services.useApi.request({ config })

      return result
    }
  }

  context.$api.banner = new BannerMethods()
}
