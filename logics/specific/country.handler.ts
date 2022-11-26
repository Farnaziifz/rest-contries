import { countryApi } from '~~/resources/api/country'

const api = countryApi()
export const getCountryList = async () => {
  const res = await api.getCountryList()
  return res
}
