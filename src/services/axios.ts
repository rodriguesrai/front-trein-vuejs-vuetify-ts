import axios from 'axios'

const api = axios.create({
  baseURL: 'http://54.91.155.223:3000/',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api
