<template>
  <div class="container">

    <div class="ui grid" style="height: 101.5vh;">
      <div class="six wide column navhelp">
        <div class="home_title" style="color: white;">
          <div id="saude" class="hello1">Olá, [nome]</div>
          <div class="welcome1">Seja bem-vindo novamente!</div>
        </div>
      </div>
      <div class="ten wide column">
        <span class="text titlep">
          <h1 style="margin-top: 30px;">Sistema de HelpDesk</h1>
        </span>

          <div class="columnHelpDesk" style="width: 80%;">
            <div class="ui segment">
              <h3 class="ui header">Novo Chamado</h3>
              <form id="form" class="ui form">
                <!-- <div class="field">
                    <label>Nome</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Nome completo"
                      class="campo required"
                      id="nome"
                      @input="nomeValidate"
                    />
                    <span class="span-required">Insira o Nome</span>
                  </div>
                  <div class="field">
                    <label>E-mail</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      class="campo required"
                      id="email"
                      @input="emailValidate"
                    />
                    <span class="span-required">Insira um e-mail válido</span>
                  </div> -->
                <div class="field">
                  <label>Assunto</label>
                  <input type="text" name="subject" placeholder="Assunto" class="campo required" id="assunto"
                    @input="assuntoValidate" />
                  <span class="span-required">Insira o Assunto</span>
                </div>
                <!-- <div class="field">
                    <label>Prioridade</label>
                    <select
                      name="prioridade"
                      class="campo required"
                      id="prioridade"
                      @change="prioridadeValidate"
                    >
                      <option class="placeholder" disabled selected>Selecione a prioridade</option>
                      <option value="Alta">Alta</option>
                      <option value="Média">Média</option>
                      <option value="Baixa">Baixa</option>
                    </select>
                    <span class="span-required">Selecione a Prioridade</span>
                  </div> -->
                <div class="field">
                  <label>Descrição</label>
                  <textarea name="description" rows="2" class="campo auto-expand required" id="descricao"
                    @input="descricaoValidate"></textarea>
                  <span class="span-required">Insira a Descrição</span>
                </div>
                <div class="field">
                  <label>Arquivo</label>
                  <input type="file" name="arquivo" class="campo required" id="arquivo" />
                  <span class="span-required">Insira o Arquivo</span>
                </div>
                <button type="submit" class="ui button" id="enviarChamado">Enviar</button>
                <button class="ui button" type="button" onclick="limparFormulario()">
                  Limpar Formulário
                </button>
              </form>
            </div>
          </div>

          <div class="columnHelpDesk" style="width: 80%;">
            <div class="ui segment">
              <h3 class="ui header">Meus Chamados</h3>
              <table class="ui celled table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Assunto</th>
                    <th>Prioridade</th>
                    <th>Descrição</th>
                    <th>Arquivo</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody id="tableBody">
                  <tr>
                    <td>Davie</td>
                    <td>cl201275@g.unicamp.br</td>
                    <td>Problema</td>
                    <td>Alta</td>
                    <td class="td-desc"><button type="submit" class="ui button desc">Ver</button></td>
                    <td class="td-desc"><button type="submit" class="ui button desc">Ver</button></td>
                    <td>Pendente</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

  </div>

  <div class="logout-button">
    <router-link to="/logout">
      <i class="sign out icon hpu"></i>
    </router-link>
    <div class="logout-display">
      <p>Logout</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelpDeskUser',
  created() {
    this.$emit('hideNavbar', true) // Emitir o evento para ocultar a navbar
    this.$emit('hideFooter', true)
  },
  unmounted() {
    this.$emit('hideNavbar', false) // Emitir o evento para mostrar a navbar novamente
    this.$emit('hideFooter', false)
  },
  mounted() {
    if (localStorage.getItem('name') != null) {
      const name = JSON.parse(localStorage.getItem('name'))
      document.getElementById('saude').innerHTML = 'Olá, ' + name
    } else {
      document.getElementById('saude').innerHTML = 'Olá, usuário!'
    }

    const formulario = document.getElementById('form')
    const campos = document.querySelectorAll('.required')
    const spans = document.querySelectorAll('.span-required')

    formulario.addEventListener('submit', (event) => {
      event.preventDefault()
      validateForm()
    })

    campos.forEach((campo, index) => {
      campo.addEventListener('input', () => {
        removeError(index)
      })
    })

    function setError(index) {
      campos[index].style.border = '2px solid #e63636'
      spans[index].style.display = 'block'
    }

    function removeError(index) {
      campos[index].style.border = ''
      spans[index].style.display = 'none'
    }

    function limparFormulario() {
      document.getElementById('nome').value = ''
      document.getElementById('email').value = ''
      document.getElementById('assunto').value = ''
      document.getElementById('prioridade').selectedIndex = 0
      document.getElementById('descricao').value = ''
      document.getElementById('arquivo').value = ''
    }

    document.getElementById('form').addEventListener('submit', function (event) {
      event.preventDefault()
    })

    function validateForm() {
      const validations = [
        { index: 0, isValid: nomeValidate },
        { index: 1, isValid: emailValidate },
        { index: 2, isValid: assuntoValidate },
        { index: 3, isValid: prioridadeValidate },
        { index: 4, isValid: descricaoValidate }
      ]

      validations.forEach((validation) => {
        const { index, isValid } = validation
        if (!isValid()) {
          setError(index)
        } else {
          removeError(index)
        }
      })
    }

    function nomeValidate() {
      return campos[0].value.length > 0
    }

    function emailValidate() {
      const emailValue = campos[1].value
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (emailValue.length === 0) {
        return false
      }
      return emailRegex.test(emailValue)
    }

    function assuntoValidate() {
      return campos[2].value.length > 0
    }

    function prioridadeValidate() {
      return campos[3].value !== 'Selecione a prioridade'
    }

    function descricaoValidate() {
      return campos[4].value.length > 0
    }

    // cadastrar
    const addChamado = document.getElementById('enviarChamado')
    addChamado.addEventListener('click', function () {
      console.log('Iniciando cadastro')
      let assunto = document.getElementById('assunto').value
      let descricao = document.getElementById('descricao').value
      let status = 'Pendente'

      console.log('Query')

      const query = `mutation CreateChamado($data: DadosChamado!) {
    createChamado(data: $data) {
      idChamado
      nome
      status
      idBancada
      detalhes
      dataHora
      prioridade
    }
  }`

      console.log('Variáveis')

      // Obtém a data e hora atual
      const dataHoraAtual = new Date()
      const dataHoraString = dataHoraAtual.toLocaleString()

      const variables = {
        data: {
          nome: nome,
          email: email,
          assunto: assunto,
          prioridade: prioridade,
          descricao: descricao,
          status: status,
          dataHora: dataHoraString
        }
      }

      //     // Consulta para obter o ID e outras variáveis do funcionário pelo email
      //     const queryFuncionarioByEmail = `
      //     query FuncionariosByEmail($email: String!) {
      //   funcionariosByEmail(email: $email) {
      //     idBancada
      //   }
      // }
      //   `;

      //   // Variáveis para a consulta do funcionário
      //   const variablesFuncionario = {
      //     email: email,
      //   };

      console.log(variables)

      axios.post('http://localhost:4000', { query, variables }).then(
        (result) => {
          console.log(result)
          carregaDados()
        },
        (error) => {
          console.log(error)
        }
      )
    })
  }
}
</script>

<style src="../assets/pages.css"></style>
