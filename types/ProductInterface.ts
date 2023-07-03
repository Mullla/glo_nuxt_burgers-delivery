export interface IProduct {
  id: number | null
  title: string | null
  description: string | null
  weight: number | null
  code: string | null
  price: number | null
  image:
    | {
        src: string
        alt: string
      }
    | string
    | null
}
