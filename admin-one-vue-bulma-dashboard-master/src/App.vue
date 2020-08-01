<template>
  <div id="app">
    <aside-menu :menu="menu"/>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import AsideMenu from '@/components/AsideMenu'

export default {
  name: 'home',
  components: {
    AsideMenu
  },
  computed: {
    menu () {
      return [
        'Mapas',
        [
          {
            to: '/maps',
            icon: 'table',
            label: 'Todos'
          },
          {
            to: '/hospital',
            icon: 'table',
            label: 'E. de Salud'
          },
          {
            to: '/school',
            icon: 'table',
            label: 'Colegios Públicos'
          },
          {
            to: '/parroquias',
            icon: 'table',
            label: 'Iglesias'
          }
        ]
      ]
    }
  },
  created () {
    this.$store.commit('user', {
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://avatars.dicebear.com/v2/gridy/John-Doe.svg'
    })
  }
}
</script>
