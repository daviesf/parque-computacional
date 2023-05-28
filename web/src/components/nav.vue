<template>
  <div class="sidebar navbar" v-show="showNavbar">
    <div class="logo-details">
      <i class="desktop icon"></i>
      <div class="logo_name">Parque Computacional</div>
      <i class="bx bx-menu" id="btn"></i>
    </div>
    <ul class="nav-list">
      <li>
        <router-link to="/">
          <i class="home icon"></i>
          <span class="links_name">Home</span>
        </router-link>
        <span class="tooltip">Home</span>
      </li>
      <li>
        <router-link to="/patrimonio">
          <i class="keyboard outline icon"></i>
          <span class="links_name">Patrimônio</span>
        </router-link>
        <span class="tooltip">Patrimônio</span>
      </li>
      <li>
        <router-link to="/bancada">
          <i class="server icon"></i>
          <span class="links_name">Bancada</span>
        </router-link>
        <span class="tooltip">Bancada</span>
      </li>
      <li>
        <router-link to="/manutencao">
          <i class="wrench icon"></i>
          <span class="links_name">Manutenção</span>
        </router-link>
        <span class="tooltip">Manutenção</span>
      </li>
      <li>
        <router-link to="/helpDeskAdm">
          <i class="laptop icon"></i>
          <span class="links_name">HelpDesk</span>
        </router-link>
        <span class="tooltip">Helpdesk</span>
      </li>
      <li>
        <router-link to="/usuario">
          <i class="user outline icon"></i>
          <span class="links_name">Usuário</span>
        </router-link>
        <span class="tooltip">Usuário</span>
      </li>
      <li>
        <div class="logout-list" id="logout-list">
          <router-link to="/logout">
            <i class="sign out icon"></i>
            <span class="links_name">Log-out</span>
          </router-link>
          <span class="tooltip">Fazer log-out</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'NavBar',
  components: {
    RouterLink
  },
  props: ['showNavbar'],
  mounted() {
    let sidebar = document.querySelector('.sidebar')
    let closeBtn = document.querySelector('#btn')
    closeBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open')
      menuBtnChange() //calling the function(optional)
    })
    // following are the code to change sidebar button(optional)
    function menuBtnChange() {
      if (sidebar.classList.contains('open')) {
        closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right') //replacing the iocns class
      } else {
        closeBtn.classList.replace('bx-menu-alt-right', 'bx-menu') //replacing the iocns class
      }
    }
  },



}
</script>

<style src="../assets/pages.css"></style>
