<template>
  <section class="home-section">
    <span class="text titlep">
      <h1>Tela de Patrimônios Cadastrados</h1>
    </span>
    <div class="ui container table-p">
      <div class="ui stackable grid">
        <div class="five wide column" style="margin-top: 30px">
          <div class="ui vertical menu">
            <div class="header item">Filtros</div>

            <div class="accordion">
              <div class="accordion-header">
                <span>Código</span>
                <span class="accordion-icon">+</span>
              </div>
              <div class="accordion-body">
                <div class="ui icon input fluid">
                  <input type="text" placeholder="Ex: 1282" class="fluid" id="filter-cod" />
                  <i class="search icon"></i>
                </div>
              </div>
            </div>
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
                <span>Marca</span>
                <span class="accordion-icon">+</span>
              </div>
              <div class="accordion-body">
                <div class="ui icon input fluid">
                  <input type="text" placeholder="Ex: Samsung" class="fluid" id="filter-marca" />
                  <i class="search icon"></i>
                </div>
              </div>
            </div>
            <div class="accordion">
              <div class="accordion-header">
                <span>Modelo</span>
                <span class="accordion-icon">+</span>
              </div>
              <div class="accordion-body">
                <div class="ui icon input fluid">
                  <input type="text" placeholder="Ex: S20" class="fluid" id="filter-modelo" />
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
                <div class="ui icon input fluid">
                  <input type="text" placeholder="Ex: Impressora" class="fluid" id="filter-tipo" />
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

        <div class="eleven wide column tabelinha" style="margin-top: 20px">
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
                  <th class="wide-100">Bancada</th>
                  <th class="wide-130">Marca</th>
                  <th class="wide-130">Modelo</th>
                  <th class="wide-130">Tipo</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody id="patrimonio-table-body"></tbody>
            </table>
          </div>
          <div class="bg-table">
            <div class="ui grid">
              <div class="sixteen wide column">
                <div class="ui right floated small labeled icon button" id="add-patrimonio">
                  <i class="keyboard outline icon"></i> Adicionar Patrimônio
                </div>
                <!-- <div class="ui left floated small button bg-button" id="del-patrimonio-btn">
                  Excluir
                </div> -->
                <div class="ui left floated small button bg-button" id="upd-patrimonio-btn">
                  Alterar
                </div>
                <div class="ui left floated small button bg-button" id="ativar-patrimonio-btn">
                  Ativar
                </div>
                <div class="ui left floated small button bg-button" id="desativar-patrimonio-btn">
                  Inativar
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
        <h2 class="ui dividing header">Adicionar Patrimônio</h2>
        <form class="ui form" id="form">
          <div class="ui two column grid">
            <div class="column">
              <div class="field">
                <label>Código</label>
                <input
                  type="text"
                  name="codigo"
                  placeholder="Código do Patrimônio"
                  class="campo required"
                  id="codigo"
                  @input="codigoValidate"
                />
                <span class="span-required">Insira o código do Patrimônio</span>
              </div>
              <div class="field">
                <label>Bancada</label>
                <select name="tipo" class="campo required" id="bancada" @change="bancadaValidate">
                  <option selected value="Selecione" disabled>Selecione uma bancada...</option>
                </select>
                <span class="span-required">Selecione 1 Bancada</span>
              </div>
              <div class="field">
                <label>Tipo</label>
                <input
                  type="text"
                  name="tipo"
                  placeholder="Tipo"
                  class="campo required"
                  id="tipo"
                  @input="tipoValidate"
                />
                <span class="span-required">Selecione um tipo</span>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label>Marca</label>
                <input
                  type="text"
                  name="marca"
                  placeholder="Marca"
                  class="campo required"
                  id="marca"
                  @input="marcaValidate"
                />
                <span class="span-required">Insira a Marca</span>
              </div>
              <div class="field">
                <label>Modelo</label>
                <input
                  type="text"
                  name="modelo"
                  placeholder="Modelo"
                  class="campo required"
                  id="modelo"
                  @input="modeloValidate"
                />
                <span class="span-required">Insira o Modelo</span>
              </div>
              <div class="field">
                <label>Status</label>
                <select name="status" class="campo required" id="status" @change="statusValidate">
                  <!-- <option value="Selecione" class="placeholder" disabled selected>
                    Selecione o status
                  </option> -->
                  <option value="ativo">Ativo</option>
                  <option value="inativo">Inativo</option>
                  <option value="manutenção">Em manutenção</option>
                </select>
                <span class="span-required">Selecione o Status</span>
              </div>
              <button class="ui submit button" type="submit" id="submit-patrimonio">
                Adicionar
              </button>
              <button class="ui submit button" type="submit" id="upd-patrimonio">Atualizar</button>
              <button class="ui button cancel-button" id="cancel-button">Cancelar</button>
            </div>
          </div>
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
  name: 'Patrimonio',
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
    const selectCheckboxes = document.getElementsByClassName('select-checkbox')
    const selectAllCheckbox = document.getElementById('select-all')

    // Selecione todos os checkboxes quando o checkbox geral é selecionado
    selectAllCheckbox.addEventListener('click', function () {
      for (var i = 0; i < selectCheckboxes.length; i++) {
        selectCheckboxes[i].checked = this.checked
      }
    })

    // Faz o dimmer aparecer ao clicar no botão "Adicionar Patrimônio" e desaparecer ao clicar fora do pop-up.
    // eslint-disable-next-line no-undef

    //Cadastrar
    $(document).ready(function () {
      // eslint-disable-next-line no-undef
      $('#add-patrimonio').click(function (e) {
        const esconder = document.querySelector('#upd-patrimonio')
        esconder.style.display = 'none'

        const aparecer1 = document.querySelector('#submit-patrimonio')
        aparecer1.style.display = 'inline'
        e.preventDefault()
        $('.ui.dividing.header').text('Cadastrar Patrimônio')
        $('#submit-patrimonio').text('Adicionar')
        $('.dimmer').fadeIn()

        const selectedRow = $(this).closest('tr')

        const selectedFields = selectedRow.find('td').slice(1, 7)

        const formFields = $('#form input, #form select')
        formFields.eq(0).prop('readonly', false).val(selectedFields.eq(0).text().trim())
        formFields.eq(1).val(selectedFields.eq(0).text().trim())
        formFields.eq(2).val(selectedFields.eq(0).text().trim())
        formFields.eq(3).val(selectedFields.eq(0).text().trim())
        formFields.eq(4).val(selectedFields.eq(0).text().trim())
        formFields.eq(5).val(selectedFields.eq(0).text().trim())
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

    // Deletar
    $(document).ready(function () {
      $('#del-patrimonio-btn').click(function () {
        const selectedCheckboxes = $('input.select-checkbox:checked')

        if (selectedCheckboxes.length == 0) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Selecione o patrimônio que deseja excluir',
            confirmButtonColor: '#004654', // Cor padrão do botão Confirmar

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
            if (result.isConfirmed) {
              selectedCheckboxes.each(function () {
                const selectedRow = $(this).closest('tr')
                const selectedFields = selectedRow.find('td').slice(1, 7)
                const codigoCell = selectedFields.eq(0).text().trim()

                console.log('Código selecionado:', codigoCell)
                console.log('Iniciando Atualização')
                console.log('Verificando status')
                console.log('Query')

                const query = `mutation Mutation($idPatrimonio: ID!) {
              deletePatrimonio(idPatrimonio: $idPatrimonio)
            }`

                console.log('Variáveis')

                const variables = {
                  idPatrimonio: parseInt(codigoCell)
                }

                console.log(variables)

                axios.post('http://localhost:4000', { query, variables }).then(
                  (result) => {
                    console.log(result)
                    $('.popup').hide()
                    $('.dimmer').hide()
                    carregaDados()

                    Swal.fire({
                      title: 'Deletado!',
                      text: 'O patrimônio foi removido com sucesso!',
                      icon: 'success',
                      confirmButtonColor: '#004654' // Cor personalizada do botão OK
                    })
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
      $('#desativar-patrimonio-btn').click(function () {
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

            const query = `mutation Mutation($idPatrimonio: ID!, $status: String!) {
              ativarPatrimonio(idPatrimonio: $idPatrimonio, status: $status) {
                idPatrimonio
                status
              }
            }
            `

            console.log('Variáveis')

            const variables = {
              idPatrimonio: parseInt(codigoCell),
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
      $('#ativar-patrimonio-btn').click(function () {
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

            const query = `mutation Mutation($idPatrimonio: ID!, $status: String!) {
              ativarPatrimonio(idPatrimonio: $idPatrimonio, status: $status) {
                idPatrimonio
                status
              }
            }
            `

            console.log('Variáveis')

            const variables = {
              idPatrimonio: parseInt(codigoCell),
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

    //Atualizar
    $(document).ready(function () {
      // Open the popup for updating when "Alterar" button is clicked
      $('#upd-patrimonio-btn').click(function () {
        const esconder = document.querySelector('#upd-patrimonio')
        esconder.style.display = 'inline'

        const aparecer1 = document.querySelector('#submit-patrimonio')
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
        const selectedFields = selectedRow.find('td').slice(1, 7)
        const formFields = $('#form input, #form select')

        const statusValue = document.getElementById('status').value
        const tipoValue = document.getElementById('tipo').value

        console.log(statusValue)
        console.log(tipoValue)
        console.log(formFields.eq(0).val(selectedFields.eq(0).text().trim()))

        formFields.eq(0).val(selectedFields.eq(0).text().trim())
        formFields.eq(1).val(selectedFields.eq(1).text().trim())
        formFields.eq(2).val(tipoValue)
        formFields.eq(3).val(selectedFields.eq(2).text().trim())
        formFields.eq(4).val(selectedFields.eq(3).text().trim())
        formFields.eq(5).val(statusValue)

        // Change the header text to "Atualizar Patrimônio"
        $('.ui.dividing.header').text('Atualizar Patrimônio')
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

    function codigoValidate() {
      return campos[0].value.length > 0
    }

    function bancadaValidate() {
      return campos[1].value.length > 0
    }

    function marcaValidate() {
      return campos[3].value.length > 0
    }

    function modeloValidate() {
      return campos[4].value.length > 0
    }

    function tipoValidate() {
      return campos[2].value.length > 0
    }

    function statusValidate() {
      return campos[5].value.length > 0
    }

    function validateForm() {
      const validations = [
        { index: 0, isValid: codigoValidate },
        { index: 1, isValid: bancadaValidate },
        { index: 3, isValid: marcaValidate },
        { index: 4, isValid: modeloValidate },
        { index: 2, isValid: tipoValidate },
        { index: 5, isValid: statusValidate }
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
    const queryBancada = `query Query {
  bancadas {
    idBancada
    apelido
  }
}`

    axios
      .post('http://localhost:4000', { query: queryBancada })
      .then((result) => {
        const bancadas = result.data.data.bancadas
        const selectBancada = document.getElementById('bancada')

        bancadas.forEach((bancada) => {
          const option = document.createElement('option')
          option.value = bancada.idBancada
          option.innerHTML = 'ID: ' + bancada.idBancada + ' | ' + bancada.apelido
          selectBancada.appendChild(option)
        })
      })
      .catch((err) => {
        console.log(err)
      })

    carregaDados()

    function carregaDados() {
      document.getElementById('patrimonio-table-body').innerHTML = ''
      const query = `query Query {
  patrimonios {
    idPatrimonio
    idBancada
    marca
    modelo
    tipo
    status
  }

}`
      authenticator().then((result) => {
        if (result == 'true') {
          axios.post('http://localhost:4000', { query }).then(
            (result) => {
              const patrimonios = result.data.data.patrimonios

              const tbody = document.getElementById('patrimonio-table-body')

              patrimonios.forEach((patrimonio) => {
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

                const tdPatrimonio = document.createElement('td')
                tdPatrimonio.textContent = patrimonio.idPatrimonio

                const tdBancada = document.createElement('td')
                tdBancada.textContent = patrimonio.idBancada

                const tdMarca = document.createElement('td')
                tdMarca.textContent = patrimonio.marca

                const tdModelo = document.createElement('td')
                tdModelo.textContent = patrimonio.modelo

                const tdTipo = document.createElement('td')
                tdTipo.textContent = patrimonio.tipo

                const tdStatus = document.createElement('td')
                if (patrimonio.status == 0) {
                  patrimonio.status = 'Inativo'
                } else if (patrimonio.status == 1) {
                  patrimonio.status = 'Ativo'
                } else if (patrimonio.status == 2) {
                  patrimonio.status = 'Manutenção'
                }

                tdStatus.textContent = patrimonio.status

                tr.appendChild(tdCheckbox)
                tr.appendChild(tdPatrimonio)
                tr.appendChild(tdBancada)
                tr.appendChild(tdMarca)
                tr.appendChild(tdModelo)
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

    // cadastrar
    const addPatrimonio = document.getElementById('submit-patrimonio')
    addPatrimonio.addEventListener('click', function () {
      console.log('Iniciando cadastro')
      let cod = document.getElementById('codigo').value
      let bancada = document.getElementById('bancada').value
      let marca = document.getElementById('marca').value
      let modelo = document.getElementById('modelo').value
      let tipo = document.getElementById('tipo').value
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

      const query = `mutation Mutation($data: dadosPatrimonio) {
  createPatrimonio(data: $data) {
    idPatrimonio
    marca
    modelo
    status
    tipo
    idBancada
  }
}`

      console.log('Variáveis')

      const variables = {
        data: {
          idPatrimonio: parseInt(cod),
          idBancada: parseInt(bancada),
          marca: marca,
          modelo: modelo,
          tipo: tipo,
          status: status
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

    // Atualizar
    const updPatrimonio = document.getElementById('upd-patrimonio')
    updPatrimonio.addEventListener('click', function () {
      console.log('Iniciando Atualização')
      let cod = document.getElementById('codigo').value
      let bancada = document.getElementById('bancada').value
      let marca = document.getElementById('marca').value
      let modelo = document.getElementById('modelo').value
      let tipo = document.getElementById('tipo').value
      let status = document.getElementById('status').value
      console.log('valor: olha ai')
      console.log(status)
      if (status == 'ativo') {
        status = 1
      } else if (status == 'inativo') {
        status = 0
      } else if (status == 'manutenção') {
        status = 2
      }

      const query = `mutation Mutation($idPatrimonio: ID!, $data: dadosPatrimonio) {
  updatePatrimonio(idPatrimonio: $idPatrimonio, data: $data) {
    idBancada
    idPatrimonio
    marca
    modelo
    status
    tipo
  }
}`

      console.log('Código selecionado:', cod)

      console.log('Variáveis')

      const variables = {
        idPatrimonio: parseInt(cod),
        data: {
          status: parseInt(status),
          idBancada: parseInt(bancada),
          idPatrimonio: parseInt(cod),
          marca: marca,
          modelo: modelo,
          tipo: tipo
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

    // filtro
    const filter = document.getElementById('filter')
    filter.addEventListener('click', function () {
      let cod = document.getElementById('filter-cod').value
      let bancada = document.getElementById('filter-bancada').value
      let marca = document.getElementById('filter-marca').value
      let modelo = document.getElementById('filter-modelo').value
      let tipo = document.getElementById('filter-tipo').value
      if (document.getElementById('cb-ativo').checked) {
        var status = '1'
      } else if (document.getElementById('cb-inativo').checked) {
        var status = '0'
      } else if (document.getElementById('cb-manut').checked) {
        var status = '2'
      }

      const query = `query Query($filter: PatrimonioFilter) {
  searchPatrimonios(filter: $filter) {
    idBancada
    idPatrimonio
    marca
    modelo
    status
    tipo
  }
}`
      const variables = {
        filter: {
          idPatrimonio: parseInt(cod),
          idBancada: parseInt(bancada),
          marca: marca,
          modelo: modelo,
          status: parseInt(status),
          tipo: tipo
        }
      }

      axios.post('http://localhost:4000', { query, variables }).then((result) => {
        console.log(result)
        document.getElementById('patrimonio-table-body').innerHTML = ''
        const patrimonios = result.data.data.searchPatrimonios
        const tbody = document.getElementById('patrimonio-table-body')

        patrimonios.forEach((patrimonio) => {
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

          const tdPatrimonio = document.createElement('td')
          tdPatrimonio.textContent = patrimonio.idPatrimonio

          const tdBancada = document.createElement('td')
          tdBancada.textContent = patrimonio.idBancada

          const tdMarca = document.createElement('td')
          tdMarca.textContent = patrimonio.marca

          const tdModelo = document.createElement('td')
          tdModelo.textContent = patrimonio.modelo

          const tdTipo = document.createElement('td')
          tdTipo.textContent = patrimonio.tipo

          const tdStatus = document.createElement('td')
          if (patrimonio.status == 0) {
            patrimonio.status = 'Inativo'
          } else if (patrimonio.status == 1) {
            patrimonio.status = 'Ativo'
          } else if (patrimonio.status == 2) {
            patrimonio.status = 'Manutenção'
          }

          tdStatus.textContent = patrimonio.status

          tr.appendChild(tdCheckbox)
          tr.appendChild(tdPatrimonio)
          tr.appendChild(tdBancada)
          tr.appendChild(tdMarca)
          tr.appendChild(tdModelo)
          tr.appendChild(tdTipo)
          tr.appendChild(tdStatus)
          tbody.appendChild(tr)
        })
      })
    })
  }
}
</script>

<style src="../assets/pages.css"></style>
