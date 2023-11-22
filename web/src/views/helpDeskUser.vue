<template>
  <div class="container">
    <div class="ui grid">
      <div class="six wide column navhelp">
        <div class="home_title_helpdesk">
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
                    maxlength="200"
                  ></textarea>
                  <span class="span-required">Insira a Descrição</span>
                </div>
                <button class="ui button" type="submit" id="enviarChamado">Enviar</button>
                <input type="reset" class="ui button" id="limparForm" value="Limpar Formulário" />
              </form>
            </div>
          </div>

          <div class="columnHelpDesk">
            <div class="ui segment">
              <h3 class="ui header">Meus Chamados</h3>
              <div class="tabela-hd">
                <table class="ui celled table">
                  <thead>
                    <tr>
                      <th class="wide-250">Assunto</th>
                      <th class="wide-100">Detalhes</th>
                      <th class="wide-150">Data e Hora</th>
                      <th class="wide-100">Status</th>
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
import axios from 'axios'
import { authenticator } from '../script/auth'
import emailjs from '@emailjs/browser'

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
    carregaDados()
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

    function sendEmail() {
      const identityCookie = document.cookie.replace(
        /(?:(?:^|.*;\s*)identity\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )
      const decodedIdentity = atob(identityCookie)
      const subjectValue = document.getElementById('assunto').value
      const descriptionValue = document.getElementById('descricao').value

      const templateParams = {
        from_name: decodedIdentity,
        subject: subjectValue,
        description: descriptionValue
      }

      emailjs.send('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', templateParams, 'SUA_PUBLIC_KEY').then(
        (result) => {
          console.log(templateParams)
          console.log('EMAIL ENVIADO', result.status)
        },
        (error) => {
          console.log(error)
        }
      )
    }

    // cadastrar
    const addChamado = document.getElementById('enviarChamado')
    addChamado.addEventListener('click', function () {
      console.log('Iniciando cadastro')
      let assunto = document.getElementById('assunto').value
      let descricao = document.getElementById('descricao').value
      if (descricao.length > 200) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Descrição com mais de 200 caracteres',
          confirmButtonColor: '#004654', // Cor padrão do botão Confirmar

          confirmButtonText: 'OK'
        })
      }
      const idFuncionario = document.cookie.replace(
        /(?:(?:^|.*;\s*)identity3\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )

      console.log('Query')

      const query = `mutation Mutation($data: DadosChamado!) {
  createChamado(data: $data) {
    dataHora
    assunto
    detalhes
    status
    idFuncionario
  }
}
`

      // Obtém a data e hora atual
      const dataHoraAtual = new Date()
      const dataHoraString = dataHoraAtual.toLocaleString()

      const variables = {
        data: {
          assunto: assunto,
          detalhes: descricao,
          status: 0,
          dataHora: dataHoraString,
          idFuncionario: parseInt(atob(idFuncionario))
        }
      }
      console.log('aa')
      console.log(variables)

      axios.post('http://localhost:4000', { query, variables }).then(
        (result) => {
          console.log(result)
          carregaDados()
          sendEmail()
          document.getElementById('assunto').value = ''
          document.getElementById('descricao').value = ''
        },
        (error) => {
          console.log(error)
          document.getElementById('assunto').value = ''
          document.getElementById('descricao').value = ''
        }
      )
    })

    $(document).ready(function () {
      $('.form-hd .input-hd').change(function () {
        $('.form-hd .p-hd').text(this.files.length + ' arquivo(s) selecionado.')
      })
    })

    function carregaDados() {
      document.getElementById('tableBody').innerHTML = ''
      const query = `
        query Query {
  chamados {
    idChamado
    dataHora
    assunto
    detalhes
    status
  }
}
      `
      authenticator().then((result) => {
        if (result == 'true') {
          axios.post('http://localhost:4000', { query }).then((result) => {
            const chamados = result.data.data.chamados
            const tbody = document.getElementById('tableBody')

            chamados.forEach((chamado) => {
              const tr = document.createElement('tr')
              const tdAssunto = document.createElement('td')
              tdAssunto.textContent = chamado.assunto

              const tdDetalhes = document.createElement('td')
              tdDetalhes.innerHTML = `<button type="submit" class="ui button desc" onclick="Swal.fire({
  icon: 'info',
  title: 'Descrição ID ${chamado.idChamado}',
  text: '${chamado.detalhes}',
  confirmButtonColor: '#004654'
})">Ver</button>`

              const tdDataHora = document.createElement('td')
              tdDataHora.textContent = chamado.dataHora

              const tdStatus = document.createElement('td')
              const statusValue = chamado.status

              let statusText
              if (statusValue === 0) {
                statusText = 'Pendente'
              } else if (statusValue === 1) {
                statusText = 'Encerrado'
              } else if (statusValue === 2) {
                statusText = 'Resolvido'
              } else {
                statusText = 'Desconhecido'
              }

              tdStatus.textContent = statusText

              tr.appendChild(tdAssunto)
              tr.appendChild(tdDetalhes)
              tr.appendChild(tdDataHora)
              tr.appendChild(tdStatus)

              tbody.appendChild(tr)
            })
          })
        }
      })
    }
  }
}
</script>

<style src="../assets/pages.css"></style>
