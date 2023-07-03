import { nuxtContext } from '@nuxt/types'
import { IProduct } from '@/types/ProductInterface.ts'

export default (context: nuxtContext) => {
  class ProductModel implements IProduct {
    id: number | null

    title: string | null

    description: string | null

    weight: number | null

    code: string | null

    image:
      | {
          src: string
          alt: string
        }
      | string
      | null

    price: number | null

    constructor() {
      this.id = null
      this.title = null
      this.description = null
      this.weight = null
      this.code = null
      this.image = null
      this.price = null
    }

    toObject() {
      const { id, title, description, weight, code, image, price } = this
      return {
        id,
        title,
        description,
        weight,
        code,
        image,
        price
      }
    }
  }

  context.$models.banner = ProductModel
}
