<template>
  <section class="home-section">
    <div class="bgimg">
    </div>
    <div class="bgimg-second"></div>

  <div class="ui container">
    <div class="ui center aligned grid page-container">
    <div class="row"></div>
    <div class="row"></div>
      <div class="row">
        <div class="column">
          <h1 class="ui header titulo1">~Apelido~</h1>
          <p class="ui header titulo2">Seja bem-vindo novamente</p>
        </div>
      </div>
      <div class="row">
        <router-link to="/patrimonio">
          <a class="ui inverted button button1">Patrimônio</a>
        </router-link>
        <router-link to="/bancada">
          <a class="ui inverted button button2">Bancada</a>
        </router-link>
      </div>
    </div>
  </div>









    
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home'
}
</script>

<style src="../assets/pages.css"></style>
