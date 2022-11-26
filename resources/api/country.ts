import { api } from './index'

const pageUrl = 'all'

type response = {
  data: any
  errors: any
}

const getCountryList = async (): Promise<response> => {
  const res = await api.get(pageUrl)
  return res.data
}

export const countryApi = () => {
  return {
    getCountryList,
  }
}
