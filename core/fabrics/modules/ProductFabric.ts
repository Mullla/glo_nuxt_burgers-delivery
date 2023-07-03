import { nuxtContext } from '@nuxt/types'
import { IProduct } from '@/types/ProductInterface.ts'

export default (context: nuxtContext) => {
  class ProductFabric {
    private static ProductModel = context.$models.product

    create({ id, title, description, weight, code, image, price }: IProduct) {
      const product: IProduct = new ProductFabric.ProductModel()

      product.id = id || Date.now()
      product.title = title || ''
      product.description = description || ''
      product.weight = weight || 0
      product.code = code || ''
      product.image = image || { src: '', alt: '' }
      product.price = price || 0

      return product
    }
  }

  context.$fabrics.product = new ProductFabric()
}
