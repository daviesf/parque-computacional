<template>
  <section class="home-section home-sec">
    <div class="container-fluid containercolor">
      <div class="ui container">
        <div class="ui grid centered">
          <div class="ui twelve wide grid">
            <div class="card_info">
              <i class="computer bill alternate icon custom-icon"></i>
              <div class="card_title">Patrimônios cadastrados:</div>
              <div class="card_content">25</div>
            </div>
            <div class="card_info">
              <i class="server icon custom-icon"></i>
              <div class="card_title">Chamados pendentes:</div>
              <div class="card_content">12</div>
            </div>

            <div class="card_info">
              <i class="wrench icon custom-icon"></i>
              <div class="card_title">Patrimônios manutenção:</div>
              <div class="card_content">2</div>
            </div>
            <div class="card_info">
              <i class="trash bill alternate icon custom-icon"></i>
              <div class="card_title">Patrimônios Inoperantes:</div>
              <div class="card_content">3</div>
            </div>

            <div class="card_info">
              <i class="sync bill alternate icon custom-icon"></i>
              <div class="card_title">Bancadas operando:</div>
              <div class="card_content">1</div>
            </div>

            <div class="card_info">
              <i class="eye icon custom-icon"></i>
              <div class="card_title">Manutenções realizadas:</div>
              <div class="card_content">1</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="home_title">
      <div id="saude" class="hello">Olá, [nome]</div>
      <div class="welcome">Seja bem-vindo novamente!</div>
    </div>


    <div class="ui container" style="margin-top: 120px;">
      <div class="ui grid centered">
        <router-link to="/patrimonio">
          <button class="button1">
            <span class="button1-content">Patrimônio </span>
          </button>
        </router-link>
        <router-link to="/bancada">
          <button class="button1">
            <span class="button1-content">Bancada</span>
          </button>
        </router-link>
        <router-link to="/manutencao">
          <button class="button1">
            <span class="button1-content">Manutenção</span>
          </button>
        </router-link>
        <router-link to="/helpDeskAdm">
          <button class="button1">
            <span class="button1-content">HelpDesk</span>
          </button>
        </router-link>
        <router-link to="/usuario">
          <button class="button1">
            <span class="button1-content">Usuário</span>
          </button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Home',

  mounted() {
    // localStorage.setItem("user", JSON.stringify({ name: "João" }));
    if (localStorage.getItem("user") != null) {
      const name = JSON.parse(localStorage.getItem("user")).name;
      document.getElementById("saude").innerHTML = "Olá, " + name;
    } else {
      document.getElementById("saude").innerHTML = "Olá, querido!";
      // this.$router.push("/login");
    }
  }
};

</script>

<style src="../assets/pages.css"></style>
