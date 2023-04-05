<template>
  <NavBar/>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import NavBar from './components/nav.vue';

export default {
  name: 'App',
  components: { 
    NavBar 
  }
};
</script>

<style src="./assets/main.css"></style>

