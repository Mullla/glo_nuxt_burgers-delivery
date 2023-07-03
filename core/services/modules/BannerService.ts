import { nuxtContext } from '@nuxt/types'
// import { IBanner } from '@/types/BannerInterface.ts'

export default (context: nuxtContext) => {
  class BannerService {
    private static bannerMethods = context.$api.banner

    private static bannerAdapters = context.$adapters.banner

    async getBanners(params = {}) {
      const result = await BannerService.bannerMethods.getBanners(params)
      return BannerService.bannerAdapters.getBanners(result)
      // return BannerService.bannerAdapters.getBanners(result).map((bannerModel: IBanner) => bannerModel.toObject())
    }
  }

  context.$services.banner = new BannerService()
}
