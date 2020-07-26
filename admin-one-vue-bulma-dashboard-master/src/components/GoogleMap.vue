<template>
  <div>
    <div>
      <h2 style="padding: 20px">Busque el lugar</h2>
      <label style="padding: 20px">
        <gmap-autocomplete
          @place_changed="setPlace"
          style="width: 700px;">
        </gmap-autocomplete>
        <button @click="addMarker">Buscar</button>
      </label>
      <br/>

    </div>
    <br>
    <gmap-map
      :center="center"
      :zoom="zoom"
      style="width:100%;  height: 700px;">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :icon="m.icon"
        :title="m.title"
        @click="clickMarker(m)"
      ></gmap-marker>
      <gmap-info-window
        @closeclick="window_open=false"
        :opened="window_open"
        :options="{
          pixelOffset: {
            width: 0,
            height: -35
          }
        }"
        :position="infowindow">
        {{description}}
      </gmap-info-window>
    </gmap-map>
  </div>
</template>

<script>
import PlacesRepository from '@/services/PlacesRepository'
export default {
  name: 'GoogleMap',
  data () {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      zoom: 15,
      currentPlace: null,
      infowindow: { lat: 10, lng: 10.0 },
      window_open: false,
      description: 'Hello World'
    }
  },

  mounted () {
    this.geolocate()
    PlacesRepository.getAllCategories()
      .then((response) => {
        const category = response.data
        PlacesRepository.getAllPlaces()
          .then((response) => {
            response.data.forEach(element => {
              const marker = {
                lat: parseFloat(element.latitude),
                lng: parseFloat(element.longitude)
              }
              var cat = category.find(a => a.id === element.category)
              var image = cat.icon
              this.markers.push({ position: marker, icon: image, title: element.description })
              this.places.push(this.currentPlace)
            })
          })
          .catch(error => console.log(error))
      })
      .catch(error => console.log(error))
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace (place) {
      this.currentPlace = place
    },
    openWindow () {
      this.window_open = true
    },
    clickMarker (marker) {
      this.center = marker.position
      this.openWindow()
      this.infowindow = { lat: marker.position.lat, lng: marker.position.lng }
      this.description = marker.title
    },
    addMarker () {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        }
        this.center = marker
        this.zoom = 15
        this.currentPlace = null
      }
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    }
  }
}

</script>
