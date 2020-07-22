import axios from 'axios'

const config = {
  baseURL: 'https://j7uxqs7ive.execute-api.us-east-1.amazonaws.com/dev/api/v1/'
}

const Repository = {
  public () {
    return axios.create(config)
  },
  private () {
    config.headers = {
      'Content-Type': 'application/json'
    }
    return axios.create(config)
  },
  multipart () {
    config.headers = {
      'Content-Type': 'multipart/form-data'
    }
    config.timeout = 30000
    return axios.create(config)
  }
}

export default Repository
