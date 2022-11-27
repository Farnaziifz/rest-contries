import { api } from './index'
import { countryList, country } from '~~/core/types/country'
import { makeARequest } from '~~/logics/shared/api.handler'
const pageUrl = 'all'

type response = {
  data: countryList
  errors: any
}

const getCountryList = async (): Promise<response> => {
  const res = await api.get(pageUrl)
  return res.data
}
const getSingleCountry = async (name: string) =>
  await makeARequest<country>(api.get, `name/${name}?fullText=true`)

export const countryApi = () => {
  return {
    getCountryList,
    getSingleCountry,
  }
}
