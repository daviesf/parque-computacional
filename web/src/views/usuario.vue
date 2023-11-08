<template>
  <section class="home-section">
    <span class="text titlep">
      <h1>Tela de Usuários Cadastrados</h1>
    </span>
    <div class="ui container table-p">
      <div class="ui stackable grid">
        <div class="five wide column" style="margin-top: 20px">
          <div class="ui vertical menu">
            <div class="header item">Filtros</div>

            <div class="accordion">
              <div class="accordion-header">
                <span>Nome</span>
                <span class="accordion-icon">+</span>
              </div>
              <div class="accordion-body">
                <div class="ui icon input fluid">
                  <input
                    type="text"
                    placeholder="Nome do Funcionário"
                    class="fluid"
                    id="filter-nome"
                  />
                  <i class="search icon"></i>
                </div>
              </div>
            </div>
            <div class="accordion">
              <div class="accordion-header">
                <span>E-mail</span>
                <span class="accordion-icon">+</span>
              </div>
              <div class="accordion-body">
                <div class="ui icon input fluid">
                  <input
                    type="text"
                    placeholder="E-mail do Funcionário"
                    class="fluid"
                    id="filter-email"
                  />
                  <i class="search icon"></i>
                </div>
              </div>
            </div>
            <div class="accordion">
              <div class="accordion-header">
                <span>Tipo</span>
                <span class="accordion-icon">+</span>
              </div>
              <div class="accordion-body">
                <div class="ui two column grid">
                  <div class="column">
                    <div class="ui checkbox">
                      <input type="checkbox" id="cb-adm" />
                      <label>Administrador</label>
                    </div>
                    <div class="ui checkbox">
                      <input type="checkbox" id="cb-user" />
                      <label>Usuário Comum</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion">
              <div class="accordion-header">
                <span>Status</span>
                <span class="accordion-icon">+</span>
              </div>
              <div class="accordion-body">
                <div class="ui two column grid">
                  <div class="column">
                    <div class="ui checkbox">
                      <input type="checkbox" id="cb-ativo" />
                      <label>Ativo</label>
                    </div>
                    <div class="ui checkbox">
                      <input type="checkbox" id="cb-desligado" />
                      <label>Desligado</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="ui icon input fluid">
                <button class="button1" id="filter">
                  <span class="button1-content"><i class="search icon"></i>Aplicar Filtro</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="eleven wide column" style="margin-top: 20px">
          <div style="max-height: 65vh; overflow-y: auto">
            <table class="ui compact celled definition table">
              <thead>
                <tr>
                  <td class="collapsing">
                    <div class="ui fitted checkbox">
                      <input type="checkbox" id="select-all" />
                      <label></label>
                    </div>
                  </td>
                  <th class="wide-100">Código</th>
                  <th class="wide-130">Nome</th>
                  <th>E-mail</th>
                  <th class="wide-130">Tipo</th>
                  <th class="wide-100">Status</th>
                </tr>
              </thead>
              <tbody id="usuarios-table-body"></tbody>
            </table>
          </div>
          <div class="bg-table">
            <div class="ui grid">
              <div class="sixteen wide column">
                <div class="ui right floated small labeled icon button" id="add-funcionario">
                  <i class="user outline icon"></i> Adicionar Funcionário
                </div>
                <div class="ui left floated small button bg-button" id="alterar-usuario-btn">
                  Alterar
                </div>
                <div class="ui left floated small button bg-button" id="ativar-usuario-btn">
                  Ativar
                </div>
                <div class="ui left floated small button bg-button" id="desligar-usuario-btn">
                  Desligar
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Pop-up de cadastro de patrimônio -->
    <div class="dimmer">
      <div class="ui container add-form">
        <h2 class="ui dividing header">Adicionar Funcionário</h2>
        <form class="ui form" id="form">
          <div class="field">
            <label>Nome</label>
            <input
              type="text"
              name="nome"
              placeholder="Nome"
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
          </div>
          <div class="field">
            <label>Tipo</label>
            <select name="tipo" class="campo required" id="tipo" @change="tipoValidate">
              <option value="administrador">Administardor</option>
              <option value="usuario comum">Usuário Comum</option>
            </select>
            <span class="span-required">Selecione algum Tipo</span>
          </div>
          <div class="field">
            <label>Status</label>
            <select name="status" class="campo required" id="status" @change="statusValidate">
              <option value="ativo">Ativo</option>
              <option value="desligado">Desligado</option>
            </select>
            <span class="span-required">Selecione algum Status</span>
          </div>
          <button class="ui submit button" type="submit" id="submit-usuario">Adicionar</button>
          <button class="ui submit button" type="submit" id="upd-usuario">Atualizar</button>
          <button class="ui button cancel-button" id="cancel-button">Cancelar</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import { authenticator } from '../script/auth.js'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Usuario',
  mounted() {
    function theme() {
      const themeIcon = document.getElementById('theme-icon')
      const theme = document.cookie.replace(/(?:(?:^|.*;\s*)theme\s*=\s*([^;]*).*$)|^.*$/, '$1')
      const app2 = document.querySelector('table')
      if (theme) {
        if (theme == 'dark') {
          app2.classList.add('inverted')
          app2.classList.add('dark-mode')
        } else if (theme == 'light') {
          app2.classList.remove('inverted')
          app2.classList.remove('dark-mode')
        }
      }
    }

    theme()
    // Selecione todos os checkboxes quando o checkbox geral é selecionado
    document.getElementById('select-all').addEventListener('click', function () {
      var checkboxes = document.getElementsByClassName('select-checkbox')
      for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = this.checked
      }
    })

    // Deselecione o checkbox geral se algum checkbox individual for desmarcado
    var checkboxes = document.getElementsByClassName('select-checkbox')
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].addEventListener('click', function () {
        if (!this.checked) {
          document.getElementById('select-all').checked = false
        }
      })
    }

    // Exibe o pop-pup ao clicar no botão "Adicionar Patrimônio"
    // eslint-disable-next-line no-undef
    $(document).ready(function () {
      // eslint-disable-next-line no-undef
      $('#add-funcionario').on('click', function () {
        // eslint-disable-next-line no-undef
        $('.add-form').addClass('open')
      })
    })

    // Faz o dimmer aparecer ao clicar no botão "Adicionar Patrimônio" e desaparecer ao clicar fora do pop-up.
    // eslint-disable-next-line no-undef
    $(document).ready(function () {
      // eslint-disable-next-line no-undef
      $('#add-funcionario').click(function (e) {
        e.preventDefault()
        // eslint-disable-next-line no-undef
        $('.dimmer').fadeIn()
      })
      // eslint-disable-next-line no-undef
      $('.dimmer').click(function (e) {
        // eslint-disable-next-line no-undef
        if ($(e.target).hasClass('dimmer')) {
          // eslint-disable-next-line no-undef
          $(this).fadeOut()
        }
      })
    })

    // Oculta o pop-up e o dimmer ao clicar no botão "Cancelar"
    // eslint-disable-next-line no-undef
    $(document).ready(function () {
      // eslint-disable-next-line no-undef
      $('.cancel-button').click(function () {
        // eslint-disable-next-line no-undef
        $('.popup').hide()
        // eslint-disable-next-line no-undef
        $('.dimmer').hide()
      })

      // Oculta o pop-up e o dimmer ao pressionar a tecla "Esc"
      // eslint-disable-next-line no-undef
      $(document).keydown(function (event) {
        if (event.keyCode == 27) {
          // eslint-disable-next-line no-undef
          $('.popup').hide()
          // eslint-disable-next-line no-undef
          $('.dimmer').hide()
        }
      })
    })

    // Placeholder
    const tipoSelect = document.querySelector('select[name="tipo"]')
    tipoSelect.addEventListener('change', () => {
      if (tipoSelect.value === '') {
        tipoSelect.classList.add('placeholder')
      } else {
        tipoSelect.classList.remove('placeholder')
      }
    })

    // Filtro
    const accordions = document.querySelectorAll('.accordion')

    accordions.forEach((accordion) => {
      const accordionHeader = accordion.querySelector('.accordion-header')
      accordionHeader.addEventListener('click', () => {
        accordion.classList.toggle('active')
      })
    })

    //Validação do form
    const form = document.getElementById('form')
    const campos = document.querySelectorAll('.required')
    const spans = document.querySelectorAll('.span-required')

    form.addEventListener('submit', (event) => {
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
        { index: 0, isValid: nomeValidate },
        { index: 1, isValid: emailValidate },
        { index: 2, isValid: tipoValidate },
        { index: 3, isValid: statusValidate }
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

      return emailRegex.test(emailValue)
    }

    function tipoValidate() {
      return campos[2].value > 0
    }

    function statusValidate() {
      return campos[3].value > 0
    }

    carregaDados()

    function carregaDados() {
      document.getElementById('usuarios-table-body').innerHTML = ''
      const query = `query Query {
      funcionarios {
          email
          idFuncionario
          nome
          status
          tipo
        }
      }`

      //       const queryBancada = `query Query {
      //   bancadas {
      //     idBancada
      //     apelido
      //   }
      // }`

      authenticator().then((result) => {
        if (result == 'true') {
          axios.post('http://localhost:4000', { query }).then(
            (result) => {
              // Supondo que a variável "result" contenha o objeto com os dados retornados da busca
              const funcionarios = result.data.data.funcionarios

              const tbody = document.getElementById('usuarios-table-body')

              funcionarios.forEach((usuario) => {
                const tr = document.createElement('tr')

                const tdCheckbox = document.createElement('td')
                tdCheckbox.className = 'collapsing'
                const checkbox = document.createElement('div')
                checkbox.className = 'ui fitted checkbox'
                const inputCheckbox = document.createElement('input')
                inputCheckbox.type = 'checkbox'
                inputCheckbox.className = 'select-checkbox'
                const labelCheckbox = document.createElement('label')
                checkbox.appendChild(inputCheckbox)
                checkbox.appendChild(labelCheckbox)
                tdCheckbox.appendChild(checkbox)

                inputCheckbox.addEventListener('change', function () {
                  const selectCheckboxes = document.getElementsByClassName('select-checkbox')
                  const selectAllCheckbox = document.getElementById('select-all')

                  const isAllChecked = Array.from(selectCheckboxes).every(
                    (checkbox) => checkbox.checked
                  )
                  selectAllCheckbox.checked = isAllChecked

                  if (!this.checked) {
                    selectAllCheckbox.checked = false
                  }
                })

                // axios.post('http://localhost:4000', { query: queryBancada }).then((result) => {
                //   const bancadas = result.data.data.bancadas
                //   const tbody = document.getElementById('usuarios-table-body')

                //   bancadas.forEach((bancada) => {
                //     const tdBancada = document.createElement('td')
                //     tdBancada.textContent = bancada.idBancada
                //     option.innerHTML = 'ID: ' + bancada.idBancada + ' | ' + bancada.apelido
                //     tr.appendChild(tdBancada)
                //   })
                // })

                const tdID = document.createElement('td')
                tdID.textContent = usuario.idFuncionario

                const tdNome = document.createElement('td')
                tdNome.textContent = usuario.nome

                const tdEmail = document.createElement('td')
                tdEmail.textContent = usuario.email

                // const tdBancada = document.createElement('td')
                // tdBancada.textContent = bancada.idBancada

                const tdTipo = document.createElement('td')
                if (usuario.tipo == 1) {
                  usuario.tipo = 'Administrador'
                } else if (usuario.tipo == 2) {
                  usuario.tipo = 'Usuário Comum'
                }

                tdTipo.textContent = usuario.tipo

                const tdStatus = document.createElement('td')
                if (usuario.status == 1) {
                  usuario.status = 'Ativo'
                } else if (usuario.status == 2) {
                  usuario.status = 'Desligado'
                }

                tdStatus.textContent = usuario.status

                tr.appendChild(tdCheckbox)
                tr.appendChild(tdID)
                tr.appendChild(tdNome)
                tr.appendChild(tdEmail)
                // tr.appendChild(tdBancada)
                tr.appendChild(tdTipo)
                tr.appendChild(tdStatus)

                tbody.appendChild(tr)
              })
            },
            (error) => {
              console.log(error)
            }
          )
        }
      })
    }

    // filtro
    const filtro = document.getElementById('filter')
    filtro.addEventListener('click', function () {
      let nome = document.getElementById('filter-nome').value
      let email = document.getElementById('filter-email').value
      if (document.getElementById('cb-adm').checked) {
        var tipo = 1
      } else if (document.getElementById('cb-user').checked) {
        var tipo = 2
      }

      var status = 1
      if (document.getElementById('cb-ativo').checked) {
        status = 1
      }
      if (document.getElementById('cb-desligado').checked) {
        status = 2
      }

      const query = `query SearchFuncionarios($filter: FuncionarioFilter) {
  searchFuncionarios(filter: $filter) {
    nome
    idFuncionario
    email
    status
    tipo
  }
}`
      const variables = {
        filter: {
          nome: nome,
          email: email,
          tipo: parseInt(tipo),
          status: parseInt(status)
        }
      }

      axios.post('http://localhost:4000', { query, variables }).then((result) => {
        console.log(result)
        document.getElementById('usuarios-table-body').innerHTML = ''
        const funcionarios = result.data.data.searchFuncionarios
        console.log('=====')
        console.log(funcionarios)
        const tbody = document.getElementById('usuarios-table-body')

        funcionarios.forEach((funcionario) => {
          const tr = document.createElement('tr')

          const tdCheckbox = document.createElement('td')
          tdCheckbox.className = 'collapsing'
          const checkbox = document.createElement('div')
          checkbox.className = 'ui fitted checkbox'
          const inputCheckbox = document.createElement('input')
          inputCheckbox.type = 'checkbox'
          inputCheckbox.className = 'select-checkbox'
          const labelCheckbox = document.createElement('label')
          checkbox.appendChild(inputCheckbox)
          checkbox.appendChild(labelCheckbox)
          tdCheckbox.appendChild(checkbox)

          inputCheckbox.addEventListener('change', function () {
            const selectCheckboxes = document.getElementsByClassName('select-checkbox')
            const selectAllCheckbox = document.getElementById('select-all')

            const isAllChecked = Array.from(selectCheckboxes).every((checkbox) => checkbox.checked)
            selectAllCheckbox.checked = isAllChecked

            if (!this.checked) {
              selectAllCheckbox.checked = false
            }
          })

          const tdID = document.createElement('td')
          tdID.textContent = funcionario.idFuncionario

          const tdNome = document.createElement('td')
          tdNome.textContent = funcionario.nome

          const tdEmail = document.createElement('td')
          tdEmail.textContent = funcionario.email

          const tdTipo = document.createElement('td')
          const tipoValue = funcionario.tipo

          let tipoText
          if (tipoValue == 1) {
            tipoText = 'Administrador'
          } else if (tipoValue == 2) {
            tipoText = 'Usuário Comum'
          } else {
            tipoText = 'Desconhecido' // Tratamento para outros valores de tipo
          }

          tdTipo.textContent = tipoText

          const tdStatus = document.createElement('td')
          const statusValue = funcionario.status

          let statusText
          if (statusValue == 1) {
            statusText = 'Ativo'
          } else if (statusValue == 2) {
            statusText = 'Desligado'
          } else {
            statusText = 'Desconhecido' // Tratamento para outros valores de tipo
          }

          tdStatus.textContent = statusText

          tr.appendChild(tdCheckbox)
          tr.appendChild(tdID)
          tr.appendChild(tdNome)
          tr.appendChild(tdEmail)
          tr.appendChild(tdTipo)
          tr.appendChild(tdStatus)

          tbody.appendChild(tr)
        })
      })
    })

    //Desativar
    $(document).ready(function () {
      $('#desligar-usuario-btn').click(function () {
        const selectedCheckboxes = $('input.select-checkbox:checked')

        if (selectedCheckboxes.length == 0) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Selecione um valor antes de desativar',
            confirmButtonColor: '#004654', // Cor padrão do botão Confirmar
            confirmButtonText: 'OK'
          })
          return
        } else {
          selectedCheckboxes.each(function () {
            const selectedRow = $(this).closest('tr')

            const selectedFields = selectedRow.find('td').slice(1, 7)

            const formFields = $('#form input, #form select')

            const codigoCell = selectedFields.eq(0).text().trim()
            let status = '0'

            console.log('Código selecionado:', codigoCell)

            console.log('Status selecionado:', status)

            console.log('Iniciando Atualização')

            console.log('Verificando status')

            console.log('Query')

            const query = `mutation Mutation($idFuncionario: ID!, $status: String!) {
  ativarFuncionario(idFuncionario: $idFuncionario, status: $status) {
    idFuncionario
    status
  }
}
            `

            console.log('Variáveis')

            const variables = {
              idFuncionario: parseInt(codigoCell),
              status: status
            }

            console.log(variables)

            axios.post('http://localhost:4000', { query, variables }).then(
              (result) => {
                console.log(result)
                $('.popup').hide()
                $('.dimmer').hide()
                carregaDados()
              },
              (error) => {
                console.log(error)
              }
            )
          })
        }
      })
    })

    //Ativar
    $(document).ready(function () {
      $('#ativar-usuario-btn').click(function () {
        const selectedCheckboxes = $('input.select-checkbox:checked')

        if (selectedCheckboxes.length == 0) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Selecione um valor antes de ativar',
            confirmButtonColor: '#004654', // Cor padrão do botão Confirmar
            confirmButtonText: 'OK'
          })
          return
        } else {
          selectedCheckboxes.each(function () {
            const selectedRow = $(this).closest('tr')

            const selectedFields = selectedRow.find('td').slice(1, 7)

            const formFields = $('#form input, #form select')

            const codigoCell = selectedFields.eq(0).text().trim()
            let status = '1'

            console.log('Código selecionado:', codigoCell)

            console.log('Status selecionado:', status)

            console.log('Iniciando Atualização')

            console.log('Verificando status')

            console.log('Query')

            const query = `mutation Mutation($idFuncionario: ID!, $status: String!) {
              ativarFuncionario(idFuncionario: $idFuncionario, status: $status) {
                idFuncionario
                status
              }
            }
            `

            console.log('Variáveis')

            const variables = {
              idFuncionario: parseInt(codigoCell),
              status: status
            }

            console.log(variables)

            axios.post('http://localhost:4000', { query, variables }).then(
              (result) => {
                console.log(result)
                $('.popup').hide()
                $('.dimmer').hide()
                carregaDados()
              },
              (error) => {
                console.log(error)
              }
            )
          })
        }
      })
    })

    let id = 0

    //Abre o pop-up de Atualizar
    $(document).ready(function () {
      // Open the popup for updating when "Alterar" button is clicked
      $('#alterar-usuario-btn').click(function () {
        const esconder = document.querySelector('#upd-usuario')
        esconder.style.display = 'inline'

        const aparecer1 = document.querySelector('#submit-usuario')
        aparecer1.style.display = 'none'

        const selectedCheckboxes = $('input.select-checkbox:checked')

        if (selectedCheckboxes.length == 0 || selectedCheckboxes.length > 1) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Selecione um valor antes de alterar',
            confirmButtonColor: '#004654',
            confirmButtonText: 'OK'
          })
          return
        }

        // Get the closest row to the selected checkbox
        const selectedRow = selectedCheckboxes.closest('tr')

        // Open the popup for updating
        $('.dimmer').fadeIn()

        // Populate the form fields with selected row data
        const selectedFields = selectedRow.find('td').slice(1, 5)
        const formFields = $('#form input, #form select')

        const statusValue = document.getElementById('status').value
        const tipoValue = document.getElementById('tipo').value

        console.log(statusValue)
        console.log(tipoValue)

        formFields.eq(0).val(selectedFields.eq(1).text().trim())
        formFields.eq(1).val(selectedFields.eq(2).text().trim())
        formFields.eq(2).val(tipoValue)
        formFields.eq(3).val(statusValue)
        id = selectedFields.eq(0).text().trim()

        // Change the header text to "Atualizar Patrimônio"
        $('.ui.dividing.header').text('Atualizar Usuário')
      })
    })

    // Requisição no banco para Atualizar
    const updUsuario = document.getElementById('upd-usuario')
    updUsuario.addEventListener('click', function () {
      console.log('Iniciando Atualização')

      console.log('Id selecionado:', id)

      let nome = document.getElementById('nome').value
      let email = document.getElementById('email').value
      let tipo = document.getElementById('tipo').value
      let status = document.getElementById('status').value
      if (status == 'ativo') {
        status = 1
      } else if (status == 'inativo') {
        status = 2
      }
      if (tipo == 'administrador') {
        tipo = 1
      } else if (tipo == 'usuario comum') {
        tipo = 2
      }

      const query = `mutation Mutation($idFuncionario: ID!, $data: DadosFuncionario!) {
  updateFuncionario(idFuncionario: $idFuncionario, data: $data) {
    nome
    email
    status
    tipo
    idFuncionario
  }
}`

      console.log('Variáveis')

      const variables = {
        idFuncionario: parseInt(id),
        data: {
          nome: nome,
          email: email,
          tipo: parseInt(tipo),
          status: parseInt(status)
        }
      }

      console.log(variables)

      axios.post('http://localhost:4000', { query, variables }).then(
        (result) => {
          console.log(result)
          $('.popup').hide()
          $('.dimmer').hide()
          carregaDados()
        },
        (error) => {
          console.log(error)
        }
      )
    })

    //Pop-up de Cadastrar
    $(document).ready(function () {
      // eslint-disable-next-line no-undef
      $('#add-funcionario').click(function (e) {
        const esconder = document.querySelector('#upd-usuario')
        esconder.style.display = 'none'

        const aparecer1 = document.querySelector('#submit-usuario')
        aparecer1.style.display = 'inline'
        e.preventDefault()
        $('.ui.dividing.header').text('Cadastrar Usuário')
        $('#submit-usuario').text('Adicionar')
        $('.dimmer').fadeIn()

        const selectedRow = $(this).closest('tr')

        const selectedFields = selectedRow.find('td').slice(1, 7)

        const formFields = $('#form input, #form select')
        formFields.eq(0).prop('readonly', false).val(selectedFields.eq(0).text().trim())
        formFields.eq(1).val(selectedFields.eq(0).text().trim())
        formFields.eq(2).val(selectedFields.eq(0).text().trim())
        formFields.eq(3).val(selectedFields.eq(0).text().trim())
      })

      $('.cancel-button').click(function () {
        $('.popup').hide()
        $('.dimmer').hide()
      })
      // eslint-disable-next-line no-undef
      $('.dimmer').click(function (e) {
        // eslint-disable-next-line no-undef
        if ($(e.target).hasClass('dimmer')) {
          $(this).fadeOut()
        }
      })
    })

    // Cadastrar
    const addUsuario = document.getElementById('submit-usuario')
    addUsuario.addEventListener('click', function () {
      console.log('Iniciando cadastro')
      let nome = document.getElementById('nome').value
      let email = document.getElementById('email').value
      let tipo = document.getElementById('tipo').value
      let status = document.getElementById('status').value
      if (status == 'ativo') {
        status = 1
      } else if (status == 'inativo') {
        status = 2
      }
      if (tipo == 'administrador') {
        tipo = 1
      } else if (tipo == 'usuario comum') {
        tipo = 2
      }

      console.log('Verificando status')

      console.log('Query')

      const query = `mutation Mutation($data: DadosFuncionario!) {
      createFuncionario(data: $data) {
        nome
        email
        status
        tipo
      }
    }`

      console.log('Variáveis')

      const variables = {
        data: {
          nome: nome,
          email: email,
          tipo: parseInt(tipo),
          status: parseInt(status)
        }
      }

      console.log(variables)

      axios.post('http://localhost:4000', { query, variables }).then(
        (result) => {
          console.log(result)
          $('.popup').hide()
          $('.dimmer').hide()
          carregaDados()
        },
        (error) => {
          console.log(error)
        }
      )
    })

    // Função para verificar se um campo está vazio
    function isEmpty(value) {
      return value.trim() === ''
    }

    // Função para validar os campos
    function validateForm() {
      let isValid = true

      campos.forEach((campo, index) => {
        if (isEmpty(campo.value)) {
          setError(index)
          isValid = false
        } else {
          removeError(index)
        }
      })

      return isValid
    }

    // Função para definir um erro em um campo
    function setError(index) {
      campos[index].style.border = '2px solid #e63636'
      spans[index].style.display = 'block'
    }

    // Função para remover um erro de um campo
    function removeError(index) {
      campos[index].style.border = ''
      spans[index].style.display = 'none'
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault()
      // Executa a validação
      validateForm()
    })
  }
}
</script>

<style src="../assets/pages.css"></style>
