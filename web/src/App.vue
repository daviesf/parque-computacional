<template>
  <div>
    <NavBar />
    <router-view />
    <homeView />
  </div>
</template>
  
<script>
import NavBar from './components/nav.vue';
import homeView from './views/home.vue';


export default {
  name: 'App',
  components: {
    NavBar,
    homeView
   }
};
</script>

  