<template>
  <section class="home-section home-sec">
    <div class="container-fluid">
      <div class="ui container">
        <div class="ui grid centered">
          <div class="ui twelve center-cards">
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


    <div class="ui container">
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
    // Essa função não é de fato necessária, mas é como funcionaria.
    var names = ["João", "Maria", "José", "Ana", "Pedro"];
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }

    var shuffledNames = shuffle(names);
    var nextName = shuffledNames.pop();

    // Salva o nome no localStorage
    localStorage.setItem("user", JSON.stringify({ name: nextName }));
    // A partir daqui é o que realmente importa pra carregar o nome na home.
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

