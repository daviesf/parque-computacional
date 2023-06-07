<template>
  <section class="home-section home-sec">
    <div class="container-fluid">
      <div class="ui container">
        <div class="ui grid centered">
          <div class="ui twelve center-cards data">
            <div class="card_info">
              <i class="keyboard outline icon"></i>
              <div class="card_title">Patrimônios registrados:</div>
              <div class="card_content">25</div>
            </div>
            <div class="card_info">
              <i class="laptop icon"></i>
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
              <i class="server icon"></i>
              <div class="card_title">Bancadas operando:</div>
              <div class="card_content">1</div>
            </div>
            <div class="card_info">
              <i class="check circle outline icon"></i>
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
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',

  mounted() {
    // Essa função não é de fato necessária, mas é como funcionaria.
    var names = ["João", "Maria", "José", "Ana", "Pedro", "Lucas", "Mariana", "Carlos", "Laura", "Gabriel", "Beatriz", "Rafael", "Juliana", "Matheus", "Isabela", "Fernando", "Camila", "Diego", "Carolina"];
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


    if (localStorage.getItem("name") != null) {
      const name = JSON.parse(localStorage.getItem("name"));
      document.getElementById("saude").innerHTML = "Olá, " + name;
    } else {
      document.getElementById("saude").innerHTML = "Olá, " + nextName;
    }
  }

  
};

</script>

<style src="../assets/pages.css"></style>

