import { nuxtContext } from '@nuxt/types'

export default (context: nuxtContext) => {
  const endpoints = {
    banner: {
      getBanners: (params = {}) => ({ url: '/banners', method: 'GET', params })
    },
    product: {
      getProducts: (params = {}) => ({ url: '/products', method: 'GET', params })
    }
  }

  context.$configs.endpoints = endpoints
}
