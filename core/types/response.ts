export type response<T = never> = {
  data?: T
  errors?: {
    message: string
  }
}
