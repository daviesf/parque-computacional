<template>
  <section class="home-section home-sec">
    <div class="home_title">
      <div id="saude" class="hello">Olá, [nome]</div>
      <div class="welcome">Seja bem-vindo novamente!</div>
      

    </div>
    <div>
      <div class="cards">
        <div class="card_info">
          <div class="card_title">Patrimônios cadastrados:</div>
          <div class="card_content">25 patrimônios.</div>
        </div>
        <div class="card_info">
          <div class="card_title">Chamados pendentes:</div>
          <div class="card_content">12 chamados.</div>
        </div>
      </div>
      <div class="cards">
        <div class="card_info">
          <div class="card_title">Patrimônios em manutenção:</div>
          <div class="card_content">2 patrimônios.</div>
        </div>
        <div class="card_info">
          <div class="card_title">Patrimônios Inoperantes:</div>
          <div class="card_content">3 patrimônios.</div>
        </div>
      </div>
      <div class="cards">
        <div class="card_info">
          <div class="card_title">Bancadas operando:</div>
          <div class="card_content">{%qntd} bancadas.</div>
        </div>
        <div class="card_info">
          <div class="card_title">Manutenções realizadas:</div>
          <div class="card_content">{%qntd} manutenções.</div>
        </div>
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
