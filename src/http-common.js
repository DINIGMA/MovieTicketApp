import axios from 'axios'

export default axios.create({
  baseURL: 'https://a85ea049a5983c68.mokky.dev',
  headers: {
    'Content-Type': 'application/json'
  }
})
