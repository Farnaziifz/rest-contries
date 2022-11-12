import axios from 'axios'

export const api = axios.create({
  // @ts-ignore
  baseURL: import.meta.env.VITE_APP_BASEURL,
  timeout: 5000,
  headers: {
    'X-Api-Version': '1.0',
    // Authorization: options.token ? `Bearer ${options.token}` : '',
    // lang:
  },
})
