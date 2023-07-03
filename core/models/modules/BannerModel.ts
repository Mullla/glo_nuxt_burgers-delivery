import { nuxtContext } from '@nuxt/types'
import { IBanner } from '@/types/BannerInterface.ts'

export default (context: nuxtContext) => {
  class BannerModel implements IBanner {
    id: number | null

    image:
      | {
          src: string
          alt: string
        }
      | string
      | null

    constructor() {
      this.id = null
      this.image = null
    }

    toObject() {
      return {
        id: this.id,
        image: this.image
      }
    }
  }

  context.$models.banner = BannerModel
}
