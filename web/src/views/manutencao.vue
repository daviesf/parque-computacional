<template>
  <section class="home-section">
    <span class="text titlep">
      <h1>Tela de Manutenções Cadastradas</h1>
    </span>
    <div class="ui container table-p">
      <div class="ui stackable grid">
        <div class="five wide column" style="margin-top: 30px">
          <div class="ui vertical menu">
            <div class="header item">Filtros</div>

            <div class="accordion">
              <div class="accordion-header">
                <span>ID</span>
                <span class="accordion-icon">+</span>
              </div>
              <div class="accordion-body">
                <div class="ui icon input fluid">
                  <input
                    type="text"
                    placeholder="Código da Manutenção"
                    class="fluid"
                    id="filter-idManutencao"
                  />
                  <i class="search icon"></i>
                </div>
              </div>
            </div>
            <div class="accordion">
              <div class="accordion-header">
                <span>Patrimônio</span>
                <span class="accordion-icon">+</span>
              </div>
              <div class="accordion-body">
                <div class="ui icon input fluid">
                  <input
                    type="text"
                    placeholder="Nome do patrimônio"
                    class="fluid"
                    id="filter-patrimonio"
                  />
                  <i class="search icon"></i>
                </div>
              </div>
            </div>
            <!-- <div class="accordion">
              <div class="accordion-header">
                <span>Funcionário</span>
                <span class="accordion-icon">+</span>
              </div>
              <div class="accordion-body">
                <div class="ui icon input fluid">
                  <input
                    type="text"
                    placeholder="Nome do funcionário"
                    class="fluid"
                    id="filter-funcionario"
                  />
                  <i class="search icon"></i>
                </div>
              </div>
            </div>
            <div class="accordion">
              <div class="accordion-header">
                <span>Data</span>
                <span class="accordion-icon">+</span>
              </div>
              <div class="accordion-body">
                <div class="ui checkbox">
                  <input type="date" name="example" id="filter-data" />
                </div>
              </div>
            </div> -->

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
                  <th class="wide-80">ID</th>
                  <th class="wide-150">Patrimônio</th>
                  <th class="wide-150">Funcionário</th>
                  <th class="wide-150">Data</th>
                  <th class="wide-150">Detalhes</th>
                </tr>
              </thead>
              <tbody id="manutencoes-table-body"></tbody>
            </table>
          </div>
          <div class="bg-table">
            <div class="ui grid">
              <div class="sixteen wide column">
                <div class="ui right floated small labeled icon button" id="add-manutencao">
                  <i class="wrench icon"></i> Adicionar Manutenção
                </div>
                <div class="ui left floated small button bg-button" id="del-manutencao-btn">
                  Excluir
                </div>
                <!-- <div class="ui left floated small button bg-button" id="upd-manutencao-btn">
                  Alterar
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Pop-up de cadastro de Manutenção -->
    <div class="dimmer">
      <div class="ui container add-form">
        <h2 class="ui dividing header">Adicionar Manutenção</h2>
        <form class="ui form" id="form">
          <div class="field">
            <label>Patrimônio</label>
            <select name="tipo" class="campo required" id="patrimonio" @change="patrimonioValidate">
              <option selected value="" disabled>Selecione um Patrimônio...</option>
            </select>
            <span class="span-required">Selecione algum Patrimônio</span>
          </div>
          <div class="field">
            <label>Detalhes da Manutenção</label>
            <input
              type="text"
              name="detalhes"
              class="campo required"
              id="detalhes"
              @input="detalhesValidate"
            />
            <span class="span-required">Insira os Detalhes</span>
          </div>
          <div class="field">
            <label>Data</label>
            <input type="date" name="data" class="campo required" id="data" @input="dataValidate" />
            <span class="span-required">Insira a Data</span>
          </div>
          <div class="field">
            <label>Pertencente ao Funcionário:</label>
            <select
              name="tipo"
              class="campo required"
              id="funcionario"
              @change="funcionarioValidate"
            >
              <option selected value="" disabled>Selecione um Funcionário...</option>
            </select>
            <span class="span-required">Selecione algum Funcionário</span>
          </div>
          <button class="ui submit button" type="submit" id="submit-manutencao">Adicionar</button>
          <button class="ui submit button" type="submit" id="upd-manutencao">Atualizar</button>
          <button class="ui button cancel-button" id="cancel-button">Cancelar</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import { nomeFuncionario } from '../script/nome.js'
import { authenticator } from '../script/auth.js'

export default {
  name: 'Manutencao',
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

    // Exibe o pop-pup ao clicar no botão "Adicionar Manutenção"
    // eslint-disable-next-line no-undef
    $(document).ready(function () {
      // eslint-disable-next-line no-undef
      $('#add-manutencao').on('click', function () {
        // eslint-disable-next-line no-undef
        $('.add-form').addClass('open')
      })
    })

    // Faz o dimmer aparecer ao clicar no botão "Adicionar Manutenção" e desaparecer ao clicar fora do pop-up.
    // eslint-disable-next-line no-undef
    $(document).ready(function () {
      // eslint-disable-next-line no-undef
      $('#add-manutencao').click(function (e) {
        const esconder = document.querySelector('#upd-manutencao')
        esconder.style.display = 'none'

        const aparecer1 = document.querySelector('#submit-manutencao')
        aparecer1.style.display = 'inline'
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
        { index: 0, isValid: patrimonioValidate },
        { index: 1, isValid: detalhesValidate },
        { index: 2, isValid: dataValidate },
        { index: 3, isValid: funcionarioValidate }
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

    function patrimonioValidate() {
      return campos[0].value > 0
    }

    function detalhesValidate() {
      return campos[1].value.length > 0
    }

    function dataValidate() {
      const dateValue = campos[2].value

      // Verifique se a data é vazia (não preenchida)
      if (!dateValue) {
        return false
      }

      // Verificar se a data está no formato "YYYY-MM-DD"
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/

      if (!dateRegex.test(dateValue)) {
        return false // Formato incorreto
      }

      // Se você deseja verificar limites de data, você pode fazer isso aqui
      // Por exemplo, verifique se a data não está no futuro, se necessário

      return true // Data válida
    }

    function funcionarioValidate() {
      return campos[3].value > 0
    }

    // Puxando Dados do Banco para o Cadastro
    const queryPatrimonio = `query Query {
      patrimonios {
       idPatrimonio
       marca
        modelo
      }
    }`

    axios
      .post('http://localhost:4000', { query: queryPatrimonio })
      .then((result) => {
        const patrimonios = result.data.data.patrimonios
        const selectPatriomonio = document.getElementById('patrimonio')

        patrimonios.forEach((patrimonio) => {
          const option = document.createElement('option')
          option.value = patrimonio.idPatrimonio
          option.innerHTML =
            'Código: ' +
            patrimonio.idPatrimonio +
            ' | Marca: ' +
            patrimonio.marca +
            ' | Modelo: ' +
            patrimonio.modelo
          selectPatriomonio.appendChild(option)
        })
      })
      .catch((err) => {
        console.log(err)
      })

    const queryFuncionario = `query Query {
      funcionarios {
       nome
       idFuncionario
      }
    }`

    axios
      .post('http://localhost:4000', { query: queryFuncionario })
      .then((result) => {
        const funcionarios = result.data.data.funcionarios
        const selectFuncionario = document.getElementById('funcionario')

        funcionarios.forEach((funcionario) => {
          const option = document.createElement('option')
          option.value = funcionario.idFuncionario
          option.innerHTML = funcionario.nome
          selectFuncionario.appendChild(option)
        })
      })
      .catch((err) => {
        console.log(err)
      })

    // Carregando a tabela através do banco
    carregaDados()

    function carregaDados() {
      document.getElementById('manutencoes-table-body').innerHTML = ''
      const query = `query Query {
  consertos {
    idConserto
    idPatrimonio
    idFuncionario
    dataHora
    detalhes
  }
}`

      authenticator().then((result) => {
        if (result == 'true') {
          axios.post('http://localhost:4000', { query }).then(
            (result) => {
              // Supondo que a variável "result" contenha o objeto com os dados retornados da busca
              const consertos = result.data.data.consertos
              let i = 0
              const tbody = document.getElementById('manutencoes-table-body')

              consertos.forEach((conserto) => {
                i++
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

                const tdManutencao = document.createElement('td')
                tdManutencao.textContent = conserto.idConserto

                const tdPatrimonio = document.createElement('td')
                tdPatrimonio.textContent = conserto.idPatrimonio

                const tdFuncionario = document.createElement('td')
                nomeFuncionario(conserto.idFuncionario).then((nome) => {
                  tdFuncionario.textContent = nome
                })

                const tdData = document.createElement('td')
                tdData.textContent = conserto.dataHora

                const tdDetalhes = document.createElement('td')
                tdDetalhes.innerHTML = `<button type="submit" class="ui button desc" name="details" onclick="Swal.fire({
  icon: 'info',
  title: 'Descrição ID ${conserto.idConserto}',
  text: '${conserto.detalhes}',
  confirmButtonColor: '#004654'
})">Ver</button>`

                tr.appendChild(tdCheckbox)
                tr.appendChild(tdManutencao)
                tr.appendChild(tdPatrimonio)
                tr.appendChild(tdFuncionario)
                tr.appendChild(tdData)
                tr.appendChild(tdDetalhes)

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

    //Cadastrar
    const addManutencao = document.getElementById('submit-manutencao')
    addManutencao.addEventListener('click', function () {
      console.log('Iniciando cadastro')
      let patrimonio = document.getElementById('patrimonio').value
      let detalhes = document.getElementById('detalhes').value
      let dataInput = document.getElementById('data').value
      let funcionario = document.getElementById('funcionario').value

      console.log('Verificando status')

      console.log('Query')

      // Converter data para o formato brasileiro (dd/mm/aaaa)
      const dateObj = new Date(dataInput)
      const day = dateObj.getDate().toString().padStart(2, '0')
      const month = (dateObj.getMonth() + 1).toString().padStart(2, '0')
      const year = dateObj.getFullYear()

      const formattedDate = `${day}/${month}/${year}`

      const query = `mutation CreateConserto($data: DadosConserto!) {
    createConserto(data: $data) {
      dataHora
      detalhes
      idFuncionario
      idPatrimonio
    }
  }`

      console.log('Variáveis')

      const variables = {
        data: {
          idPatrimonio: parseInt(patrimonio),
          idFuncionario: parseInt(funcionario),
          detalhes: detalhes,
          dataHora: formattedDate // Use "dataHora" ao invés de "dataInput"
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

    //Deletar
    const delManutencao = document.getElementById('del-manutencao-btn')
    delManutencao.addEventListener('click', function () {
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
              const codigoManutencao = selectedFields.eq(0).text().trim()

              const query = `
              mutation DeleteConserto($idConserto: ID!) {
              deleteConserto(idConserto: $idConserto)
            }
            `

              const variables = {
                idConserto: parseInt(codigoManutencao)
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

    //Atualizar
    $(document).ready(function () {
      // Open the popup for updating when "Alterar" button is clicked
      $('#upd-manutencao-btn').click(function () {
        const esconder = document.querySelector('#upd-manutencao')
        esconder.style.display = 'inline'

        const aparecer1 = document.querySelector('#submit-manutencao')
        aparecer1.style.display = 'none'

        const selectedCheckboxes = $('input.select-checkbox:checked')

        if (selectedCheckboxes.length == 0 || selectedCheckboxes.length > 1) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Selecione um valor antes de alterar',
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
        const selectedFields = selectedRow.find('td').slice(1, 5)
        const formFields = $('#form input, #form select')

        const funcionarioValue = document.getElementById('funcionario').value
        const patrimonioValue = document.getElementById('patrimonio').value
        const detalhesValue = document.getElementsByName('details')[0].value
        const dataValue = document.getElementById('data').value

        console.log(dataValue)
        console.log(detalhesValue)

        formFields.eq(0).val(patrimonioValue)
        formFields.eq(1).val(detalhesValue)
        formFields.eq(2).val(dataValue)
        formFields.eq(3).val(funcionarioValue)

        // Change the header text to "Atualizar Patrimônio"
        $('.ui.dividing.header').text('Alterar Manutenção')
      })

      // Hide the pop-up and dimmer when "Cancelar" button is clicked
      $('.cancel-button').click(function () {
        $('.popup').hide()
        $('.dimmer').hide()
      })
    })

    const updManutencao = document.getElementById('upd-manutencao')
    updManutencao.addEventListener('click', function () {
      console.log('Iniciando Atualização')
      const funcionario = document.getElementById('funcionario').value
      const patrimonio = document.getElementById('patrimonio').value
      const detalhes = document.getElementById('detalhes').value
      const data = document.getElementById('data').value

      const selectedCheckboxes = $('input.select-checkbox:checked')
      const selectedRow = selectedCheckboxes.closest('tr')

      const selectedFields = selectedRow.find('td').slice(1, 7)
      const codigoManutencao = selectedFields.eq(0).text().trim()

      const query = `mutation Mutation($idConserto: ID!, $data: DadosConserto!) {
  updateConserto(idConserto: $idConserto, data: $data) {
    dataHora
    detalhes
    idConserto
    idFuncionario
    idPatrimonio
  }
}`

      console.log('Variáveis')

      const variables = {
        data: {
          idFuncionario: parseInt(funcionario),
          idPatrimonio: parseInt(patrimonio),
          detalhes: detalhes,
          dataHora: data,
          idConserto: parseInt(codigoManutencao)
        },
        idConserto: parseInt(codigoManutencao)
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
    const filtro = document.getElementById('filter')
    filter.addEventListener('click', function () {
      let idManutencao = document.getElementById('filter-idManutencao').value
      let codPatrimonio = document.getElementById('filter-patrimonio').value
      let funcionario = document.getElementById('filter-funcionario').value
      let dataManutencao = document.getElementById('filter-data').value

      const query1 = `query Query($nome: String!) {
  funcionariosByNome(nome: $nome) {
    idFuncionario
  }
}`

      const variables1 = {
        nome: document.getElementById('filter-funcionario').value
      }

      axios.post('http://localhost:4000', { query1, variables1 }).then(
        (result) => {
          console.log(result)
          funcionario = result.data.data.funcionariosByNome.idFuncionario
          console.log('aaa')
          console.log(funcionario)
        },
        (error) => {
          console.log(error)
        }
      )

      const query = `query SearchBancadas($filter: ConsertosFilter) {
  searchConsertos(filter: $filter) {
    idConserto
    idPatrimonio
    idFuncionario
    dataHora
    detalhes
  }
}`
      const variables = {
        filter: {
          idConserto: parseInt(idManutencao),
          idFuncionario: parseInt(funcionario),
          idPatrimonio: parseInt(codPatrimonio),
          dataHora: dataManutencao
        }
      }

      console.log(variables);

      axios.post('http://localhost:4000', { query, variables }).then((result) => {
        // Supondo que a variável "result" contenha o objeto com os dados retornados da busca
        console.log(result)
        const consertos = result.data.data.searchConsertos
        console.log('=====')
        console.log(consertos)
        document.getElementById('manutencoes-table-body').innerHTML = ''
        let i = 0
        const tbody = document.getElementById('manutencoes-table-body')

        consertos.forEach((conserto) => {
          i++
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

          const tdManutencao = document.createElement('td')
          tdManutencao.textContent = conserto.idConserto

          const tdPatrimonio = document.createElement('td')
          tdPatrimonio.textContent = conserto.idPatrimonio

          const tdFuncionario = document.createElement('td')
          nomeFuncionario(conserto.idFuncionario).then((nome) => {
            tdFuncionario.textContent = nome
          })

          const tdData = document.createElement('td')
          tdData.textContent = conserto.dataHora

          const tdDetalhes = document.createElement('td')
          tdDetalhes.innerHTML = `<button type="submit" class="ui button desc" onclick="Swal.fire('Descrição ID ${conserto.idConserto}', '${conserto.detalhes}' , 'info')">Ver</button>`

          tr.appendChild(tdCheckbox)
          tr.appendChild(tdManutencao)
          tr.appendChild(tdPatrimonio)
          tr.appendChild(tdFuncionario)
          tr.appendChild(tdData)
          tr.appendChild(tdDetalhes)

          tbody.appendChild(tr)
        })
      })
    })
  }
}
</script>

<style src="../assets/pages.css"></style>
