import { nuxtContext } from '@nuxt/types'
import { IBanner } from '@/types/BannerInterface.ts'

export default (context: nuxtContext) => {
  class BannerAdapter {
    private static bannerFabric = context.$fabrics.banner

    getBanner(banner: IBanner) {
      return BannerAdapter.bannerFabric.create(banner)
    }

    getBanners(banners: IBanner[]) {
      return banners.map(this.getBanner)
    }
  }

  context.$adapters.banner = new BannerAdapter()
}
