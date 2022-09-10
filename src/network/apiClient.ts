import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default axiosClient
