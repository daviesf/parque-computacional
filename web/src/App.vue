<template>
  <div>
    <NavBar />
    <router-view />
    <section class="home-section">
      <Rodape />
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
  }
}
</script>
