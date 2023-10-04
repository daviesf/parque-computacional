<template>
  <section class="home-section home-sec">
    <div class="container-fluid">
      <div class="ui container">
        <div class="ui grid centered">
          <div class="ui twelve center-cards data">
            <div class="card_info">
              <i class="keyboard outline icon"></i>
              <div class="card_title">Patrimônios registrados:</div>
              <div class="card_content" id="total_patrimonios">-</div>
            </div>
            <div class="card_info">
              <i class="laptop icon"></i>
              <div class="card_title">Chamados pendentes:</div>
              <div class="card_content" id="chamados_pendentes">-</div>
            </div>
            <div class="card_info">
              <i class="wrench icon custom-icon"></i>
              <div class="card_title">Patrimônios manutenção:</div>
              <div class="card_content" id="patrimonio_manutencao">-</div>
            </div>
            <div class="card_info">
              <i class="trash bill alternate icon custom-icon"></i>
              <div class="card_title">Patrimônios Inoperantes:</div>
              <div class="card_content" id="patrimonio_inativo">-</div>
            </div>
            <div class="card_info">
              <i class="server icon"></i>
              <div class="card_title">Bancadas operando:</div>
              <div class="card_content" id="bancada_ativa">-</div>
            </div>
            <div class="card_info">
              <i class="user outline icon"></i>
              <div class="card_title">Usuários Cadastrados:</div>
              <div class="card_content" id="usuarios_cadastrados">-</div>
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
        <router-link to="/patrimonios">
          <button class="button1">
            <span class="button1-content">Patrimônio</span>
          </button>
        </router-link>
        <router-link to="/bancadas">
          <button class="button1">
            <span class="button1-content">Bancada</span>
          </button>
        </router-link>
        <router-link to="/consertos">
          <button class="button1">
            <span class="button1-content">Manutenção</span>
          </button>
        </router-link>
        <router-link to="/helpdesk">
          <button class="button1">
            <span class="button1-content">HelpDesk</span>
          </button>
        </router-link>
        <router-link to="/usuarios">
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
import axios from 'axios'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',

  mounted() {
    const identityCookie = document.cookie.replace(
      /(?:(?:^|.*;\s*)identity\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    if (identityCookie) {
      const decodedIdentity = atob(identityCookie)
      document.getElementById('saude').innerHTML = 'Olá, ' + decodedIdentity + '!'
    } else {
      document.getElementById('saude').innerHTML = 'Olá, usuário!'
    }

    const totalBancadaQuery = `
  query {
    totalBancadasOp
  }
`

    axios.post('http://localhost:4000', { query: totalBancadaQuery }).then(
      (result) => {
        const totalPatrimonios = result.data.data.totalBancadasOp

        const totalPatrimoniosElement = document.getElementById('bancada_ativa')
        totalPatrimoniosElement.textContent = totalPatrimonios
      },
      (error) => {
        console.log(error)
      }
    )

    const totalPatrimoniosManutencao = `
  query {
    totalPatrimoniosManutencao
  }
`

    axios.post('http://localhost:4000', { query: totalPatrimoniosManutencao }).then(
      (result) => {
        const totalPatrimonios = result.data.data.totalPatrimoniosManutencao

        const totalPatrimoniosElement = document.getElementById('patrimonio_manutencao')
        totalPatrimoniosElement.textContent = totalPatrimonios
      },
      (error) => {
        console.log(error)
      }
    )

    const totalPatrimonioQuery = `
  query {
    totalPatrimonios
  }
`

    axios.post('http://localhost:4000', { query: totalPatrimonioQuery }).then(
      (result) => {
        const totalPatrimonios = result.data.data.totalPatrimonios

        const totalPatrimoniosElement = document.getElementById('total_patrimonios')
        totalPatrimoniosElement.textContent = totalPatrimonios
      },
      (error) => {
        console.log(error)
      }
    )

    const totalFuncionarioQuery = `
  query {
    totalFuncionarios
  }
`

    axios.post('http://localhost:4000', { query: totalFuncionarioQuery }).then(
      (result) => {
        const totalFuncionarios = result.data.data.totalFuncionarios

        const totalFuncionariosElement = document.getElementById('usuarios_cadastrados')
        totalFuncionariosElement.textContent = totalFuncionarios
      },
      (error) => {
        console.log(error)
      }
    )

    const totalPatrimoniosInoperantes = `
  query {
    totalPatrimoniosInoperantes
  }
`

    axios.post('http://localhost:4000', { query: totalPatrimoniosInoperantes }).then(
      (result) => {
        const totalPatrimoniosInoperantes = result.data.data.totalPatrimoniosInoperantes

        const totalPatrimoniosElement = document.getElementById('patrimonio_inativo')
        totalPatrimoniosElement.textContent = totalPatrimoniosInoperantes
      },
      (error) => {
        console.log(error)
      }
    )

    const totalChamadosPendentesQuery = `query {
      totalChamadosPendentes
    }`

    axios.post('http://localhost:4000', { query: totalChamadosPendentesQuery }).then(
      (result) => {
        const totalChamadosPendentes = result.data.data.totalChamadosPendentes

        const chamadosPendentesElement = document.getElementById('chamados_pendentes')
        chamadosPendentesElement.textContent = totalChamadosPendentes
      },
      (error) => {
        console.log(error)
      }
    )
  }
}
</script>

<style src="../assets/pages.css"></style>
