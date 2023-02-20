import axios from 'axios'
import { HttpResponseInterface } from '@/interfaces/http'

export const getHttpSerivice = <T>(url: string): Promise<HttpResponseInterface<T>> => {
  return new Promise((resolve, reject) => {
    axios.get(url)
    .then((response) => resolve(response))
    .catch((error) => reject(error))
  })
}