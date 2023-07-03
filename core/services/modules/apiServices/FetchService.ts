import { nuxtContext } from '@nuxt/types'

export default ({ $config }: nuxtContext) => {
  class FetchService {
    async request(config = {}, body = {}) {
      try {
        const { url, options } = { ...FetchService.prepareRequest({ config, body }) }
        const fetchResult = await $fetch(url, options)
        return fetchResult
      } catch (error) {
        console.log(error)
      }

      return {}
    }

    private static prepareRequest({
      config = { url: '', method: '', params: {}, headers: {} },
      body = {}
    }: {
      config: any
      body: any
    }) {
      const { url = '', method = '', params = {}, headers = {} } = config

      const result: any = {
        method,
        params,
        header: {},
        processData: false,
        contentType: false
      }

      if (Object.values(body)?.length) {
        result.body = body
      }

      const headerResult = Object.values(headers)?.length ? Object.assign(headers, result.headers) : result.headers
      result.headers = headerResult

      return {
        url: `${$config.public.baseApiUrl}${url}`,
        options: result
      }
    }
  }

  return new FetchService()
}
