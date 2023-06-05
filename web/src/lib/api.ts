import axios from 'axios'

export const api = axios.create({
  // baseURL: 'http://0.0.0.0:3333',
  baseURL: 'http://192.168.1.70:3333',
})
