import axios from 'axios'

const PlaceRepository = {
  getAllPlaces () {
    var proxy = axios.create({
      baseURL: 'https://j7uxqs7ive.execute-api.us-east-1.amazonaws.com/dev/api/v1/'
    })
    return proxy.get(
      'core/place/'
    )
  }
}
export default PlaceRepository
