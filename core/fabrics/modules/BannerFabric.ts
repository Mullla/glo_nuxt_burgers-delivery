import { filename } from 'pathe/utils'
import { nuxtContext } from '@nuxt/types'
import { IBanner } from '@/types/BannerInterface.ts'

const imagesGlobal = import.meta.glob('@/assets/images/banners/fake/*', { eager: true })
const images = Object.fromEntries(Object.entries(imagesGlobal).map(([key, value]) => [filename(key), value.default]))

export default (context: nuxtContext) => {
  class BannerFabric {
    private static BannerModel = context.$models.banner

    create({ id, image }: IBanner) {
      const banner: IBanner = new BannerFabric.BannerModel()

      const bannerImage = typeof image === 'string' ? images[image] : ''

      banner.id = id || Date.now()
      banner.image = {
        src: bannerImage,
        alt: ''
      }

      return banner
    }
  }

  context.$fabrics.banner = new BannerFabric()
}
