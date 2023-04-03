<template>
  <div class="sidebar navbar">
    <div class="logo-details">
      <i class="desktop icon"></i>
      <div class="logo_name">Parque Computacional</div>
      <i class="bx bx-menu" id="btn"></i>
    </div>
    <ul class="nav-list">
      <li>
        <a href="#">
          <i class="home icon"></i>
          <span class="links_name">Home</span>
        </a>
        <span class="tooltip">Home</span>
      </li>
      <li>
        <a href="#">
          <i class="keyboard outline icon"></i>
          <span class="links_name">Patrimônio</span>
        </a>
        <span class="tooltip">Patrimônio</span>
      </li>
      <li>
        <a href="#">
          <i class="server icon"></i>
          <span class="links_name">Bancada</span>
        </a>
        <span class="tooltip">Bancada</span>
      </li>
      <li>
        <a href="#">
          <i class="wrench icon"></i>
          <span class="links_name">HelpDesk</span>
        </a>
        <span class="tooltip">HelpDesk</span>
      </li>
      <li>
        <a href="#">
          <i class="user outline icon"></i>
          <span class="links_name">Usuário</span>
        </a>
        <span class="tooltip">Usuário</span>
      </li>
      <li>
        <a href="#">
          <i class="bx bx-cog"></i>
          <span class="links_name">Setting</span>
        </a>
        <span class="tooltip">Setting</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
};
</script>

<style src="../../assets/home.css"></style>