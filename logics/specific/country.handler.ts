import { countryApi } from '~~/resources/api/country'

const api = countryApi()
export const getCountryList = async () => {
  const res = await api.getCountryList()
  return res
}

export const getSingleCountry = async (name: string) => {
  const res = await api.getSingleCountry(name)
  return res
}
