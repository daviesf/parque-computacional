<template>
  <section class="home-section">
    <span class="text titlep">
      <h1>Tela de Bancadas Cadastradas</h1>
    </span>
    <div class="ui container table-p">
      <div class="ui stackable grid">
        <div class="five wide column" style="margin-top: 30px">
          <div class="ui vertical menu oi">
            <div class="header item">Filtros</div>

            <div class="accordion">
              <div class="accordion-header">
                <span>Bancada</span>
                <span class="accordion-icon">+</span>
              </div>
              <div class="accordion-body">
                <div class="ui icon input fluid">
                  <input
                    type="text"
                    placeholder="ID da bancada"
                    class="fluid"
                    id="filter-bancada"
                  />
                  <i class="search icon"></i>
                </div>
              </div>
            </div>
            <div class="accordion">
              <div class="accordion-header">
                <span>Apelido</span>
                <span class="accordion-icon">+</span>
              </div>
              <div class="accordion-body">
                <div class="ui icon input fluid">
                  <input
                    type="text"
                    placeholder="Apelido da bancada"
                    class="fluid"
                    id="filter-apelido"
                  />
                  <i class="search icon"></i>
                </div>
              </div>
            </div>
            <div class="accordion">
              <div class="accordion-header">
                <span>Local</span>
                <span class="accordion-icon">+</span>
              </div>
              <div class="accordion-body">
                <div class="ui icon input fluid">
                  <input
                    type="text"
                    placeholder="Local da bancada"
                    class="fluid"
                    id="filter-local"
                  />
                  <i class="search icon"></i>
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
                      <input type="checkbox" id="cb-inativo" />
                      <label>Inativo</label>
                    </div>
                  </div>
                  <div class="column">
                    <div class="ui checkbox">
                      <input type="checkbox" id="cb-manut" />
                      <label>Manutenção</label>
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
                  <th class="wide-100">Bancada</th>
                  <th class="wide-200">Apelido</th>
                  <th class="wide-200">Local</th>
                  <th class="wide-150">Status</th>
                </tr>
              </thead>
              <tbody id="bancada-table-body"></tbody>
            </table>
          </div>
          <div class="bg-table">
            <div class="ui grid">
              <div class="sixteen wide column">
                <div class="ui right floated small labeled icon button" id="add-patrimonio">
                  <i class="server icon"></i> Adicionar Bancada
                </div>
                <!-- <div class="ui left floated small button" id="del-bancada-btn">Excluir</div> -->
                <div class="ui left floated small button" id="upd-bancada-btn">Alterar</div>
                <div class="ui left floated small button" id="ativar-bancada-btn">Ativar</div>
                <div class="ui left floated small button" id="desativar-bancada-btn">Inativar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pop-up de cadastro de bancada -->
    <div class="dimmer">
      <div class="ui container add-form">
        <h2 class="ui dividing header">Adicionar Bancada</h2>
        <form class="ui form" id="form">
          <div class="field">
            <label>Apelido</label>
            <input
              type="text"
              name="apelido"
              placeholder="Apelido"
              class="campo required"
              id="apelido"
              @input="apelidoValidate"
            />
            <span class="span-required">Inisira o Apelido</span>
          </div>
          <div class="field">
            <label>Local</label>
            <input
              type="text"
              name="local"
              placeholder="Local"
              class="campo required"
              id="local"
              @input="localValidate"
            />
            <span class="span-required">Inisira o Local</span>
          </div>

          <div class="field">
            <label>Status</label>
            <select name="status" class="campo required" id="status" @change="statusValidate">
              <option value="ativo">Ativo</option>
              <option value="inativo">Inativo</option>
              <option value="manutencao">Em manutenção</option>
            </select>
            <span class="span-required">Selecione algum Status</span>
          </div>
          <button class="ui submit button" type="submit" id="submit-bancada">Adicionar</button>
          <button class="ui submit button" type="submit" id="upd-bancada">Atualizar</button>
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
  name: 'Bancada',
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

    let cod = 0
    //Atualizar
    $(document).ready(function () {
      // Open the popup for updating when "Alterar" button is clicked
      $('#upd-bancada-btn').click(function () {
        const esconder = document.querySelector('#upd-bancada')
        esconder.style.display = 'inline'

        const aparecer1 = document.querySelector('#submit-bancada')
        aparecer1.style.display = 'none'

        const selectedCheckboxes = $('input.select-checkbox:checked')

        if (selectedCheckboxes.length == 0 || selectedCheckboxes.length > 1) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Selecione um valor antes de clicar em Alterar',
            confirmButtonColor: '#004654', // Cor padrão do botão Confirmar
            confirmButtonText: 'OK'
          })
          return
        }

        // Get the closest row to the selected checkbox
        const selectedRow = selectedCheckboxes.closest('tr')

        // Open the popup for updating
        $('.dimmer').fadeIn()

        // Populate the form fields with selected row data
        const selectedFields = selectedRow.find('td').slice(1, 4)
        const formFields = $('#form input, #form select')

        const statusValue = document.getElementById('status').value

        console.log(statusValue)

        formFields.eq(0).val(selectedFields.eq(1).text().trim())
        formFields.eq(1).val(selectedFields.eq(2).text().trim())
        formFields.eq(2).val(statusValue)
        cod = selectedFields.eq(0).text().trim()

        // Change the header text to "Atualizar Patrimônio"
        $('.ui.dividing.header').text('Atualizar Bancada')
      })

      // Hide the pop-up and dimmer when "Cancelar" button is clicked
      $('.cancel-button').click(function () {
        $('.popup').hide()
        $('.dimmer').hide()
      })
    })

    //Deletar
    $(document).ready(function () {
      $('#del-bancada-btn').click(function () {
        const selectedCheckboxes = $('input.select-checkbox:checked')

        if (selectedCheckboxes.length === 0) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Selecione um valor antes de clicar em Excluir',
            confirmButtonColor: '#004654',
            confirmButtonText: 'OK'
          })
          return
        } else {
          Swal.fire({
            title: 'Você tem certeza?',
            text: 'Você não poderá reverter a exclusão',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#004654',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, deletar!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            // Use 'then' to handle the user's choice
            if (result.isConfirmed) {
              selectedCheckboxes.each(function () {
                const selectedRow = $(this).closest('tr')
                const selectedFields = selectedRow.find('td').slice(1, 7)
                const codigoCell = selectedFields.eq(0).text().trim()

                const query = `
              mutation Mutation($idBancada: ID!) {
                deleteBancada(idBancada: $idBancada)
              }
            `

                const variables = {
                  idBancada: parseInt(codigoCell)
                }

                axios.post('http://localhost:4000', { query, variables }).then(
                  (response) => {
                    console.log(response)
                    $('.popup').hide()
                    $('.dimmer').hide()

                    Swal.fire({
                      title: 'Deletado!',
                      text: 'O patrimônio foi removido com sucesso!',
                      icon: 'success',
                      confirmButtonColor: '#004654' // Cor personalizada do botão OK
                    })

                    carregaDados()
                  },
                  (error) => {
                    console.log(error)
                  }
                )
              })
            }
          })
        }
      })
    })

    //Desativar
    $(document).ready(function () {
      $('#desativar-bancada-btn').click(function () {
        const selectedCheckboxes = $('input.select-checkbox:checked')

        if (selectedCheckboxes.length == 0) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Selecione um valor antes de clicar em Desativar',
            confirmButtonColor: '#004654', // Cor padrão do botão Confirmar
            confirmButtonText: 'OK'
          })
          return
        } else {
          selectedCheckboxes.each(function () {
            const selectedRow = $(this).closest('tr')

            const selectedFields = selectedRow.find('td').slice(1, 5)

            const formFields = $('#form input, #form select')

            const codigoCell = selectedFields.eq(0).text().trim()
            let status = '0'

            console.log('Código selecionado:', codigoCell)

            console.log('Status selecionado:', status)

            console.log('Iniciando Atualização')

            console.log('Verificando status')

            console.log('Query')

            const query = `mutation Mutation($idBancada: ID, $status: String) {
              ativarBancada(idBancada: $idBancada, status: $status) {
                idBancada
                status
              }
            }
            `

            console.log('Variáveis')

            const variables = {
              idBancada: parseInt(codigoCell),
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
      $('#ativar-bancada-btn').click(function () {
        const selectedCheckboxes = $('input.select-checkbox:checked')

        if (selectedCheckboxes.length == 0) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Selecione um valor antes de clicar em Ativar',
            confirmButtonColor: '#004654', // Cor padrão do botão Confirmar
            confirmButtonText: 'OK'
          })
          return
        } else {
          selectedCheckboxes.each(function () {
            const selectedRow = $(this).closest('tr')

            const selectedFields = selectedRow.find('td').slice(1, 5)

            const formFields = $('#form input, #form select')

            const codigoCell = selectedFields.eq(0).text().trim()
            let status = '1'

            console.log('Código selecionado:', codigoCell)

            console.log('Status selecionado:', status)

            console.log('Iniciando Atualização')

            console.log('Verificando status')

            console.log('Query')

            const query = `mutation Mutation($idBancada: ID, $status: String) {
              ativarBancada(idBancada: $idBancada, status: $status) {
                idBancada
                status
              }
            }
            `

            console.log('Variáveis')

            const variables = {
              idBancada: parseInt(codigoCell),
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

    //Cadastrar
    // Exibe o pop-pup ao clicar no botão "Adicionar Bancada"
    // eslint-disable-next-line no-undef
    $(document).ready(function () {
      // eslint-disable-next-line no-undef
      $('#add-patrimonio').on('click', function () {
        // eslint-disable-next-line no-undef
        $('.add-form').addClass('open')
      })
    })

    $(document).ready(function () {
      // eslint-disable-next-line no-undef
      $('#add-patrimonio').click(function (e) {
        const esconder = document.querySelector('#upd-bancada')
        esconder.style.display = 'none'

        const aparecer1 = document.querySelector('#submit-bancada')
        aparecer1.style.display = 'inline'

        e.preventDefault()
        const selectedRow = $(this).closest('tr')

        const selectedFields = selectedRow.find('td').slice(1, 7)

        const formFields = $('#form input, #form select')
        formFields.eq(0).prop('readonly', false).val(selectedFields.eq(0).text().trim())
        formFields.eq(1).val(selectedFields.eq(0).text().trim())

        // eslint-disable-next-line no-undef
        $('.dimmer').fadeIn()
        $('.ui.dividing.header').text('Cadastrar Bancada')
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

    function apelidoValidate() {
      return campos[0].value.length > 0
    }

    function localValidate() {
      return campos[1].value.length > 0
    }

    function statusValidate() {
      return campos[2].value.length > 0
    }

    function validateForm() {
      const validations = [
        { index: 0, isValid: apelidoValidate },
        { index: 1, isValid: localValidate },
        { index: 2, isValid: statusValidate }
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

    form.addEventListener('submit', (event) => {
      event.preventDefault()
      validateForm()
    })

    // Puxando Dados do Banco
    carregaDados()

    function carregaDados() {
      document.getElementById('bancada-table-body').innerHTML = ''
      const query = `query Query {
    bancadas {
      idBancada
      apelido
      local
      status
    }
  }`

      authenticator().then((result) => {
        if (result == 'true') {
          axios.post('http://localhost:4000', { query }).then(
            (result) => {
              // Supondo que a variável "result" contenha o objeto com os dados retornados da busca
              const bancadas = result.data.data.bancadas

              const tbody = document.getElementById('bancada-table-body')

              bancadas.forEach((bancada) => {
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

                const tdBancada = document.createElement('td')
                tdBancada.textContent = bancada.idBancada

                const tdApelido = document.createElement('td')
                tdApelido.textContent = bancada.apelido

                const tdLocal = document.createElement('td')
                tdLocal.textContent = bancada.local

                const tdTipo = document.createElement('td')
                tdTipo.textContent = bancada.tipo

                const tdStatus = document.createElement('td')
                if (bancada.status == 0) {
                  bancada.status = 'Inativo'
                } else if (bancada.status == 1) {
                  bancada.status = 'Ativo'
                } else if (bancada.status == 2) {
                  bancada.status = 'Manutenção'
                }

                tdStatus.textContent = bancada.status

                tr.appendChild(tdCheckbox)
                tr.appendChild(tdBancada)
                tr.appendChild(tdApelido)
                tr.appendChild(tdLocal)
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

    //Atualizar
    const updBancada = document.getElementById('upd-bancada')
    updBancada.addEventListener('click', function () {
      console.log('Iniciando Atualização')

      console.log('Código selecionado:', cod)

      let apelido = document.getElementById('apelido').value
      let local = document.getElementById('local').value
      let status = document.getElementById('status').value
      if (status == 'ativo') {
        status = '1'
      } else if (status == 'inativo') {
        status = '0'
      } else if (status == 'manutencao') {
        status = '2'
      }

      console.log('Verificando status')

      console.log('Query')

      const query = `mutation Mutation($idBancada: ID!, $data: DadosBancada!) {
        updateBancada(idBancada: $idBancada, data: $data) {
          apelido
          status
          local
          idBancada
        }
      }`

      console.log('Variáveis')

      const variables = {
        idBancada: parseInt(cod),
        data: {
          apelido: apelido,
          local: local,
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

    //Cadastrar
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

    const addBancada = document.getElementById('submit-bancada')
    addBancada.addEventListener('click', function () {
      console.log('Iniciando cadastro')
      let apelido = document.getElementById('apelido').value
      let local = document.getElementById('local').value
      let status = document.getElementById('status').value

      if (status == 'ativo') {
        status = 1
      } else if (status == 'inativo') {
        status = 0
      } else if (status == 'manutenção') {
        status = 2
      }

      console.log('Verificando status')
      console.log('Query')

      const query = `mutation Mutation($data: DadosBancada) {
    createBancada(data: $data) {
      apelido
      local
      status
    }
  }`

      console.log('Variáveis')

      const variables = {
        data: {
          apelido: apelido,
          local: local,
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

    form.addEventListener('submit', (event) => {
      event.preventDefault()
      // Executa a validação
      validateForm()
    })

    // filtro
    const filtro = document.getElementById('filter')
    filtro.addEventListener('click', function () {
      let bancada = document.getElementById('filter-bancada').value
      let apelido = document.getElementById('filter-apelido').value
      let local = document.getElementById('filter-local').value
      if (document.getElementById('cb-ativo').checked) {
        var status = 1
      } else if (document.getElementById('cb-inativo').checked) {
        var status = 0
      } else if (document.getElementById('cb-manut').checked) {
        var status = 2
      }
      const query = `query SearchBancadas($filter: BancadaFilter) {
  searchBancadas(filter: $filter) {
    apelido
    idBancada
    local
    status
  }
}`
      const variables = {
        filter: {
          idBancada: parseInt(bancada),
          apelido: apelido,
          local: local,
          status: parseInt(status)
        }
      }

      axios.post('http://localhost:4000', { query, variables }).then((result) => {
        console.log(result)
        document.getElementById('bancada-table-body').innerHTML = ''
        const bancadas = result.data.data.searchBancadas
        console.log('=====')
        console.log(bancadas)
        const tbody = document.getElementById('bancada-table-body')

        bancadas.forEach((bancada) => {
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

          const tdBancada = document.createElement('td')
          tdBancada.textContent = bancada.idBancada

          const tdApelido = document.createElement('td')
          tdApelido.textContent = bancada.apelido

          const tdLocal = document.createElement('td')
          tdLocal.textContent = bancada.local

          const tdStatus = document.createElement('td')
          if (bancada.status == 0) {
            bancada.status = 'Inativo'
          } else if (bancada.status == 1) {
            bancada.status = 'Ativo'
          } else if (bancada.status == 2) {
            bancada.status = 'Manutenção'
          }

          tdStatus.textContent = bancada.status

          tr.appendChild(tdCheckbox)
          tr.appendChild(tdBancada)
          tr.appendChild(tdApelido)
          tr.appendChild(tdLocal)
          tr.appendChild(tdStatus)
          tbody.appendChild(tr)
        })
      })
    })
  }
}
</script>

<style src="../assets/pages.css"></style>
