import { AxiosError, AxiosResponse } from 'axios'
import { response } from '@/core/types/response'



export const makeARequest = async <T>(
  apiHandler:
    | (<T>(route: string, data?: T) => Promise<AxiosResponse<response<T>>>)
    | (<T>(route: string) => Promise<AxiosResponse<response<T>>>),
  route: string,
  data?: T,
  config?: {
    successMessage: string,
    loadingMessage: string
  },
): Promise<response<T>> => {
  try {
    const res = await apiHandler(route, data)
    handleSuccessMessageBroadcasting(res.status, config?.successMessage)
    return res.data as response<T>
  } catch (e) {
    const err = e as AxiosError<response<T>>
    return handleError<T>(err)
  }
}

export const handleError = <T>(e: AxiosError<response<T>>): response<T> => {
  handleErrorMessageBroadcasting<T>(e)
  throw e
}

export const handleSuccessMessageBroadcasting = (
  status: number,
  message?: string,
) => {
  if (status === 200 || status === 204) {
    if (message) console.log(message)
    else console.log('success')
  }
}

export const handleErrorMessageBroadcasting = <T>(
  e: AxiosError<response<T>>,
) => {
  if (e.response?.data?.errors) {
    console.log(e.response.data.errors.message)
  } else {
    console.log(e.message)
  }
  return e
}
