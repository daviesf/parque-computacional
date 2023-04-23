<template>
  <div class="sidebar navbar">
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
        <router-link to="/helpDesk">
          <i class="wrench icon"></i>
          <span class="links_name">HelpDesk</span>
        </router-link>
        <span class="tooltip">HelpDesk</span>
      </li>
      <li>
        <router-link to="/usuario">
          <i class="user outline icon"></i>
          <span class="links_name">Usuário</span>
        </router-link>
        <span class="tooltip">Usuário</span>
      </li>
      <li>
        <router-link to="/setting">
          <i class="bx bx-cog"></i>
          <span class="links_name">Setting</span>
        </router-link>
        <span class="tooltip">Setting</span>
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
  mounted() {
    let sidebar = document.querySelector(".sidebar");
    let closeBtn = document.querySelector("#btn");
    closeBtn.addEventListener("click", () => {
        sidebar.classList.toggle("open");
        menuBtnChange();//calling the function(optional)
    })
    // following are the code to change sidebar button(optional)
    function menuBtnChange() {
        if (sidebar.classList.contains("open")) {
            closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
        } else {
            closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
        }
    }
  },
};
</script>

<style src="../assets/home.css"></style>
