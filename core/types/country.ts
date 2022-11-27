type currencies = {
  code: string
  name: string
  symbol: string
}

type language = {
  iso639_1: string
  iso639_2: string
  name: string
  nativeName: string
}

export type country = {
  name: string
  population: number
  region: string
  capital: string
  nativeName: string
  subregion: string
  topLevelDomain: string[]
  currencies: currencies[]
  languages: language[]
  borders: string[]
  flag: string
}

export type countryList = country[]
