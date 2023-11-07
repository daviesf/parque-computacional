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
        <div @click="toggleTheme1">
          <router-link to="/patrimonios">
            <i class="keyboard outline icon"></i>
            <span class="links_name">Patrimônio</span>
          </router-link>
        </div>
        <span class="tooltip">Patrimônio</span>
      </li>
      <li>
        <div @click="toggleTheme1">
          <router-link to="/bancadas">
            <i class="server icon"></i>
            <span class="links_name">Bancada</span>
          </router-link>
        </div>
        <span class="tooltip">Bancada</span>
      </li>
      <li>
        <div @click="toggleTheme1">
          <router-link to="/consertos">
            <i class="wrench icon"></i>
            <span class="links_name">Manutenção</span>
          </router-link>
        </div>
        <span class="tooltip">Manutenção</span>
      </li>
      <li>
        <div @click="toggleTheme1">
          <router-link to="/helpdesk">
            <i class="laptop icon"></i>
            <span class="links_name">HelpD
              esk</span>
          </router-link>
        </div>
        <span class="tooltip">Helpdesk</span>
      </li>
      <li>
        <div @click="toggleTheme1">
          <router-link to="/usuarios">
            <i class="user outline icon"></i>
            <span class="links_name">Usuário</span>
          </router-link>
        </div>
        <span class="tooltip">Usuário</span>
      </li>
      <li>
        <div @click="toggleTheme1">
          <router-link to="/dashboard">
            <i class="chart area icon"></i>
            <span class="links_name">Dashboard</span>
          </router-link>
        </div>
        <span class="tooltip">Dashboard</span>
      </li>
      <li>
        <span class="tooltip">Troca de Tema</span>
      </li>
      <li>
        <div class="logout-list" id="logout-list">
          <div @click="toggleTheme">
            <router-link to="">
              <i id="theme-icon" class="moon outline icon"></i>
              <span class="links_name">Troca de Tema</span>
            </router-link>
            <!-- tooltip -->
          </div>
          <router-link to="/logout">
            <i class="sign out icon"></i>
            <span class="links_name">Log-out</span>
          </router-link>
          <!-- tooltip -->
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
  methods: {
    toggleTheme() {
      const themeIcon = document.getElementById('theme-icon')
      const app = document.querySelector('.sidebar')
      const app1 = document.querySelector('body')
      const app2 = document.querySelector('table')

      if (themeIcon.classList.contains('moon')) {
        // Ativar o modo escuro
        themeIcon.classList.replace('moon', 'sun')
        document.cookie = 'theme=dark;path=/'
        app.classList.add('dark-mode')
        app1.classList.add('dark-mode')
        app2.classList.add('inverted')
        app2.classList.add('dark-mode')
      } else {
        // Voltar ao modo normal
        themeIcon.classList.replace('sun', 'moon')
        document.cookie = 'theme=light;path=/'
        app.classList.remove('dark-mode')
        app1.classList.remove('dark-mode')
        app2.classList.remove('inverted')
        app2.classList.remove('dark-mode')
      }
    },
    toggleTheme1() {
      const themeIcon = document.getElementById('theme-icon')
      const app = document.querySelector('.sidebar')
      const app1 = document.querySelector('body')
      const app2 = document.querySelector('table')

      if (themeIcon.classList.contains('sun')) {
        // Ativar o modo escuro
        document.cookie = 'theme=dark;path=/'
        app.classList.add('dark-mode')
        app1.classList.add('dark-mode')
        app2.classList.add('inverted')
      } else {
        // Voltar ao modo normal
        document.cookie = 'theme=light;path=/'
        app.classList.remove('dark-mode')
        app1.classList.remove('dark-mode')
        app2.classList.remove('inverted')
        document.cookie = 'theme=light;path=/'
      }
    }
  },
  mounted() {
    let sidebar = document.querySelector('.sidebar')
    let closeBtn = document.querySelector('#btn')
    closeBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open')
      menuBtnChange()
    })
    function menuBtnChange() {
      if (sidebar.classList.contains('open')) {
        closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right')
      } else {
        closeBtn.classList.replace('bx-menu-alt-right', 'bx-menu')
      }
    }
  }
}
</script>

<style src="../assets/pages.css"></style>
