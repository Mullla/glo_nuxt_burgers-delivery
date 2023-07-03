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
