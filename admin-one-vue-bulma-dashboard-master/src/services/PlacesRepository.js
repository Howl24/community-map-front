import Repository from './Repository'

const PlaceRepository = {
  getAllPlaces () {
    return Repository.public().get(
      'core/place/'
    )
  },
  getPlacesByCategory (idCategorie) {
    return Repository.public().get(
      `core/place?category_id=${idCategorie}`
    )
  },
  getPlacesByCategorySchool () {
    return Repository.public().get(
      'core/place?category_id=9972028d-56ab-425c-b965-517bfcd54514'
    )
  },
  getPlacesByCategoryChurch () {
    return Repository.public().get(
      'core/place?category_id=3d4af52f-d2a1-4827-a2ec-371b7d8986a9'
    )
  },
  getPlacesByCategoryHospital () {
    return Repository.public().get(
      'core/place?category_id=3dfb4b82-f5a8-4678-a124-0260e23c62b7'
    )
  },
  getAllCategories () {
    return Repository.public().get(
      'core/category/'
    )
  }
}
export default PlaceRepository
