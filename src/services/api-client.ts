import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: 'ecc1f86338a44b508c8cbc8dd2a42079'
  }
})
