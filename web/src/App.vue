<template>
  <div>
    <NavBar :showNavbar="showNavbar" />
    <div class="bg-dimmer"></div>
    <router-view @hideNavbar="hideNavbar" @hideFooter="hideFooter" />

    <section class="home-section"> 
      <Rodape v-if="showFooter" />
    </section>
  </div>
</template>

<script>
import NavBar from './components/nav.vue'
import Rodape from './components/foot.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Rodape
  },
  data() {
    return {
      showNavbar: true,
      showFooter: true
    };
  },
  methods: {
    hideNavbar(value) {
      this.showNavbar = !value;
    },
    hideFooter(value) {
      this.showFooter = !value;
    }
  }
}
</script>
