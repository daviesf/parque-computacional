<template>
  <div>
    <NavBar :showNavbar="showNavbar" />
    <div class="bg-dimmer"></div>
    <router-view @hideNavbar="hideNavbar" />
  </div>
</template>

<script>
import NavBar from './components/nav.vue'

export default {
  name: 'App',
  components: {
    NavBar
  },
  data() {
    return {
      showNavbar: true
    }
  },
  methods: {
    hideNavbar(value) {
      this.showNavbar = !value
    }
  }
}
</script>
