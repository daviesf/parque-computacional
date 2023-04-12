<template>
  <NavBar />
  <home />
</template>
  
<script>
import NavBar from './components/nav.vue';
import home from './views/home.vue';

export default {
  name: 'App',
  components: { 
    NavBar,
    home
   }
};
</script>

  