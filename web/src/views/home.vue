<template>
  <section class="home-section home-sec">
    <div class="container-fluid">
      <div class="ui container">
        <div class="ui grid centered">
          <div class="ui twelve center-cards data">
            <div class="card_info">
              <i class="keyboard outline icon"></i>
              <div class="card_title">Patrimônios registrados:</div>
              <div class="card_content" id="total_patrimonios">25</div>
            </div>
            <div class="card_info">
              <i class="laptop icon"></i>
              <div class="card_title">Chamados pendentes:</div>
              <div class="card_content" id="chamados_pendentes">12</div>
            </div>
            <div class="card_info">
              <i class="wrench icon custom-icon"></i>
              <div class="card_title">Patrimônios manutenção:</div>
              <div class="card_content" id="patrimonio_manutencao">2</div>
            </div>
            <div class="card_info">
              <i class="trash bill alternate icon custom-icon"></i>
              <div class="card_title">Patrimônios Inoperantes:</div>
              <div class="card_content" id="patrimonio_inativo">3</div>
            </div>
            <div class="card_info">
              <i class="server icon"></i>
              <div class="card_title">Bancadas operando:</div>
              <div class="card_content" id="bancada_ativa">1</div>
            </div>
            <div class="card_info">
              <i class="user outline icon"></i>
              <div class="card_title">Usuários Cadastrados:</div>
              <div class="card_content" id="usuarios_cadastrados">1</div>
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
        <router-link to="/dashboard">
          <button class="button1">
            <span class="button1-content">Dashboard</span>
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
    const identityCookie = document.cookie.replace(/(?:(?:^|.*;\s*)identity\s*=\s*([^;]*).*$)|^.*$/, "$1");
    if (identityCookie) {
      const decodedIdentity = atob(identityCookie);
      document.getElementById('saude').innerHTML = 'Olá, ' + decodedIdentity + '!';
    } else {
      document.getElementById('saude').innerHTML = 'Olá, usuário!';
    }
  }
}

</script>

<style src="../assets/pages.css"></style>
