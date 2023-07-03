export interface IBanner {
  id: number | null
  image:
    | {
        src: string
        alt: string
      }
    | string
    | null
}

export interface BannerExtended extends IBanner {
  url: string
  area: string
}
