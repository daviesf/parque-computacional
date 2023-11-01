<template>
  <div class="container">
    <div class="ui grid">
      <div class="six wide column navhelp">
        <div class="home_title">
          <div id="saude" class="hello1">Olá, [nome]</div>
          <div class="welcome1">Seja bem-vindo ao sistema de chamados técnicos!</div>
          <img src="../assets/media/hd1.gif" alt="GIF HELPDESK" class="img-hd" />
        </div>
      </div>
      <div class="ten wide column">
        <div class="navhelp2">
          <div class="columnHelpDesk">
            <div class="ui segment">
              <h3 class="ui header">Abertura de Chamado Técnico</h3>
              <form id="form" class="ui form">
                <div class="field">
                  <label>Assunto</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Assunto"
                    class="campo required"
                    id="assunto"
                    @input="assuntoValidate"
                  />
                  <span class="span-required">Insira o Assunto</span>
                </div>
                <div class="field">
                  <label>Descrição</label>
                  <textarea
                    name="description"
                    rows="2"
                    class="campo auto-expand required textarea"
                    id="descricao"
                    @input="descricaoValidate"
                  ></textarea>
                  <span class="span-required">Insira a Descrição</span>
                </div>
                <button class="ui button" id="enviarChamado">Enviar</button>
                <input type="reset" class="ui button" id="limparForm" value="Limpar Formulário" />
              </form>
            </div>
          </div>

          <div class="columnHelpDesk">
            <div class="ui segment">
              <h3 class="ui header">Meus Chamados</h3>
              <div style="overflow-y: auto">
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
                  <tbody id="tableBody"></tbody>
                </table>
              </div>
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

    document.getElementById('limparForm').addEventListener('click', function (event) {
      document.querySelector('.form-hd .p-hd').textContent = 'Arraste ou anexe arquivos aqui.'
    })

    function validateForm() {
      const validations = [
        { index: 0, isValid: assuntoValidate },
        { index: 1, isValid: descricaoValidate }
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

    function assuntoValidate() {
      return campos[0].value.length > 0
    }

    function descricaoValidate() {
      return campos[1].value.length > 0
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

    $(document).ready(function () {
      $('.form-hd .input-hd').change(function () {
        $('.form-hd .p-hd').text(this.files.length + ' arquivo(s) selecionado.')
      })
    })
  }
}
</script>

<style src="../assets/pages.css"></style>
