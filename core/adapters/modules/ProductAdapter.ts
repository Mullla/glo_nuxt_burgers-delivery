import { filename } from 'pathe/utils'
import { nuxtContext } from '@nuxt/types'
import { IProduct } from '@/types/ProductInterface.ts'

const imagesGlobal = import.meta.glob('@/assets/images/products/fake/*', { eager: true })
const images = Object.fromEntries(Object.entries(imagesGlobal).map(([key, value]) => [filename(key), value.default]))

export default (context: nuxtContext) => {
  class ProductAdapter {
    private static productFabric = context.$fabrics.product

    getProduct(product: IProduct) {
      const { image, title } = product
      const isProductImage = typeof image === 'string'
      const updatedProduct = {
        ...product,
        image: isProductImage ? { src: images[image] || '', alt: title || '' } : image
      }
      return ProductAdapter.productFabric.create(updatedProduct)
    }

    getProducts(products: IProduct[]) {
      return products.map(this.getProduct)
    }
  }

  context.$adapters.product = new ProductAdapter()
}
