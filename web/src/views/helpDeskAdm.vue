<template>
  <section class="home-section">
    <span class="text titlep">
      <h1>Tela de Chamados de HelpDesk</h1>
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
                <span>Descrição</span>
                <span class="accordion-icon">+</span>
              </div>
              <div class="accordion-body">
                <div class="ui icon input fluid">
                  <input
                    type="text"
                    placeholder="Descrição da Manutenção"
                    class="fluid"
                    id="filter-descricao"
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
                      <label>Resolvido</label>
                    </div>
                    <div class="ui checkbox">
                      <input type="checkbox" id="cb-inativo" />
                      <label>Pendente</label>
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
                  <th class="wide-50">ID</th>
                  <th class="wide-150">Nome</th>
                  <th class="wide-150">Data e hora</th>
                  <th class="wide-50">Descrição</th>
                  <th class="wide-80">Status</th>
                </tr>
              </thead>
              <tbody id="helpDesk-table-body"></tbody>
            </table>
          </div>
          <div class="bg-table">
            <div class="ui grid">
              <div class="sixteen wide column">
                <div class="ui right floated small button bg-button" id="marcar-resolvido-btn">
                  Marcar como Resolvido
                </div>
                <div class="ui right floated small button bg-button" id="remover-chamado-btn">
                  Remover Chamado
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import { nomeFuncionario } from '../script/nome.js'
import { authenticator } from '../script/auth.js'

export default {
  name: 'HelpDesk',
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

    carregaDados()

    function carregaDados() {
      document.getElementById('helpDesk-table-body').innerHTML = ''
      const query = `query Chamados {
  chamados {
    dataHora
    detalhes
    idChamado
    status
    idFuncionario
  }
}`

      authenticator().then((result) => {
        if (result == 'true') {
          axios.post('http://localhost:4000', { query }).then(
            (result) => {
              // Supondo que a variável "result" contenha o objeto com os dados retornados da busca
              const chamados = result.data.data.chamados
              const tbody = document.getElementById('helpDesk-table-body')

              chamados.forEach((chamado) => {
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

                const tdChamado = document.createElement('td')
                tdChamado.textContent = chamado.idChamado

                const tdNome = document.createElement('td')
                nomeFuncionario(chamado.idFuncionario).then((nome) => {
                  tdNome.textContent = nome
                })

                const tdBancada = document.createElement('td')
                tdBancada.textContent = chamado.idBancada

                const tddataHora = document.createElement('td')
                tddataHora.textContent = chamado.dataHora

                const tdDescricao = document.createElement('td')
                tdDescricao.innerHTML = `<button type="submit" class="ui button desc" onclick="Swal.fire({
  icon: 'info',
  title: 'Descrição ID ${chamado.idChamado}',
  text: '${chamado.detalhes}',
  confirmButtonColor: '#004654'
})">Ver</button>`

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
                  statusText = 'Desconhecido' // Tratamento para outros valores de status
                }

                tdStatus.textContent = statusText

                tr.appendChild(tdCheckbox)
                tr.appendChild(tdChamado)
                tr.appendChild(tdNome)
                tr.appendChild(tddataHora)
                tr.appendChild(tdDescricao)
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

    document.getElementById('filter').addEventListener('click', function () {
      let descricao = document.getElementById('filter-descricao').value
      let funcionario = document.getElementById('filter-funcionario').value

      if (document.getElementById('cb-ativo').checked) {
        var status = 0
      } else if (document.getElementById('cb-inativo').checked) {
        var status = 1
      }

      const query0 = `query FuncionariosByNome($nome: String!) {
  funcionariosByNome(nome: $nome) {
    idFuncionario
  }
}`

      const variables0 = {
        nome: funcionario
      }

      axios.post('http://localhost:4000', { query0, variables0 }).then(
        (result) => {
          console.log(result)
        },
        (error) => {
          console.log(error)
        }
      )

      const query = `query SearchChamados($filter: FilterChamados) {
  searchChamados(filter: $filter) {
    dataHora
    detalhes
    idChamado
    idFuncionario
    status
  }
}`

      const variables = {
        filter: {
          status: status,
          detalhes: descricao,
          idFuncionario: funcionario
        }
      }

      axios.post('http://localhost:4000', { query, variables }).then((result) => {
        console.log(result)
        document.getElementById('patrimonio-table-body').innerHTML = ''
        const chamados = result.data.data.searchChamados
        const tbody = document.getElementById('patrimonio-table-body')

        chamados.forEach((chamado) => {
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

          const tdChamado = document.createElement('td')
          tdChamado.textContent = chamado.idChamado

          const tdFuncionario = document.createElement('td')
          tdFuncionario.textContent = nomeFuncionario(chamado.idFuncionario)

          const tdData = document.createElement('td')
          tdData.textContent = patrimonio.dataHora

          const tdDescricao = document.createElement('td')
          tdDescricao.innerHTML = `<button type="submit" class="ui button desc" onclick="Swal.fire({
  icon: 'info',
  title: 'Descrição ID ${chamado.idChamado}',
  text: '${chamado.detalhes}',
  confirmButtonColor: '#004654'
})">Ver</button>`

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
            statusText = 'Desconhecido' // Tratamento para outros valores de status
          }

          tdStatus.textContent = statusText

          tr.appendChild(tdCheckbox)
          tr.appendChild(tdChamado)
          tr.appendChild(tdNome)
          tr.appendChild(tddataHora)
          tr.appendChild(tdDescricao)
          tr.appendChild(tdStatus)

          tbody.appendChild(tr)
        })
      })
    })

    //Deletar ou Excluir
    $(document).ready(function () {
      $('#remover-chamado-btn').click(function () {
        const selectedCheckboxes = $('input.select-checkbox:checked')

        if (selectedCheckboxes.length == 0) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Selecione o chamado que deseja excluir',
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

                const query = `mutation DeleteChamado($idChamado: ID!) {
                  deleteChamado(idChamado: $idChamado)
                }`

                console.log('Variáveis')

                const variables = {
                  idChamado: parseInt(codigoCell)
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
                      text: 'O chamado foi removido com sucesso!',
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

    //Resolver Chamado
    $(document).ready(function () {
      $('#marcar-resolvido-btn').click(function () {
        const selectedCheckboxes = $('input.select-checkbox:checked')

        if (selectedCheckboxes.length == 0) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Selecione uma chamada antes de resolver',
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

            let status = '2'

            console.log('Código selecionado:', codigoCell)

            console.log('Status selecionado:', status)

            console.log('Iniciando Atualização')

            console.log('Verificando status')

            console.log('Query')

            const query = `mutation Mutation($idChamado: ID!, $status: Int!) {
                resolverChamada(idChamado: $idChamado, status: $status)
              }
            `

            console.log('Variáveis')

            const variables = {
              idChamado: parseInt(codigoCell),
              status: parseInt(status)
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

    function nomeFuncionario(value) {
      return new Promise((resolve, reject) => {
        const query = `
      query Query($idFuncionario: ID!) {
        funcionario(idFuncionario: $idFuncionario) {
          nome
        }
      }`

        const variables = {
          idFuncionario: value
        }

        axios.post('http://localhost:4000', { query, variables }).then(
          (result) => {
            const nome = result.data.data.funcionario.nome
            console.log(nome)
            resolve(nome)
          },
          (error) => {
            console.log(error)
            reject(error)
          }
        )
      })
    }

    const accordions = document.querySelectorAll('.accordion')

    accordions.forEach((accordion) => {
      const accordionHeader = accordion.querySelector('.accordion-header')
      accordionHeader.addEventListener('click', () => {
        accordion.classList.toggle('active')
      })
    })
  }
}
</script>

<style src="../assets/pages.css"></style>
