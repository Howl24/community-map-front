import Repository from './Repository'

const PlaceRepository = {
  getAllPlaces () {
    return Repository.public().get(
      'core/place/'
    )
  },
  getAllCategories () {
    return Repository.public().get(
      'core/category/'
    )
  }
}
export default PlaceRepository
