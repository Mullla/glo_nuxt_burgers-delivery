export default (ctx: any) => {
  const enums = {
    products: {
      cold: {
        code: 'cold'
      },
      hot: {
        code: 'hot'
      },
      meat: {
        code: 'meat'
      }
    },
    banners: {
      main: {
        code: 'main'
      }
    }
  } as const

  ctx.$configs.enums = enums
}
