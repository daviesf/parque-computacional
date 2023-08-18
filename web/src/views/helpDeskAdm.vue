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
                    id="filter-funcionário"
                  />
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
                    id="filter-idBancada"
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
          <div style="max-height: 70vh; overflow-y: auto;">
          <table class="ui compact celled definition table">
            <thead>
              <tr>
                <td class="collapsing">
                  <div class="ui fitted checkbox">
                    <input type="checkbox" id="select-all" />
                    <label></label>
                  </div>
                </td>
                <th>ID</th>
                <th class="wide-200">Nome</th>
                <th class="wide-80">Bancada</th>
                <th class="wide-150">Data e hora</th>
                <th class="wide-50">Descrição</th>
                <th class="wide-50">Prioridade</th>
                <th class="wide-100">Status</th>
              </tr>
            </thead>
            <tbody id="helpDesk-table-body"></tbody>
            <!-- <tbody>
              <tr>
                <td class="collapsing">
                  <div class="ui fitted checkbox">
                    <input type="checkbox" class="select-checkbox" /> <label></label>
                  </div>
                </td>
                <td>Pedro Alves</td>
                <td>22</td>
                <td>01/01/1998 & 06:00</td>
                <td class="td-desc"><button type="submit" class="ui button desc">Ver</button></td>
                <td>Pendente</td>
              </tr>
              <tr>
                <td class="collapsing">
                  <div class="ui fitted checkbox">
                    <input type="checkbox" class="select-checkbox" /> <label></label>
                  </div>
                </td>
                <td>Maria Eduarda</td>
                <td>32</td>
                <td>12/02/2023 & 07:30</td>
                <td class="td-desc"><button type="submit" class="ui button desc">Ver</button></td>
                <td>Resolvido</td>
              </tr>

              <tr>
                <td class="collapsing">
                  <div class="ui fitted checkbox">
                    <input type="checkbox" class="select-checkbox" /> <label></label>
                  </div>
                </td>
                <td>Davie Schimdt</td>
                <td>13</td>
                <td>20/03/2023 & 09:47</td>
                <td class="td-desc"><button type="submit" class="ui button desc">Ver</button></td>
                <td>Pendente</td>
              </tr>
              <tr>
                <td class="collapsing">
                  <div class="ui fitted checkbox">
                    <input type="checkbox" class="select-checkbox" /> <label></label>
                  </div>
                </td>
                <td>Samuel Pereira</td>
                <td>17</td>
                <td>19/04/2023 & 11:16</td>
                <td class="td-desc"><button type="submit" class="ui button desc">Ver</button></td>
                <td>Resolvido</td>
              </tr>
            </tbody> -->
            <tfoot class="full-width">
              <tr>
                <th></th>
                <th colspan="7">
                  <div class="ui right floated small labeled icon button" id="add-patrimonio">
                    <i class="keyboard outline icon"></i> Resolver chamado
                  </div>
                  <div class="ui left floated small button">Marcar como Resolvido</div>
                  <div class="ui left floated small button">Remover Chamado</div>
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
  name: 'HelpDesk',
  mounted() {
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
    idBancada
    idChamado
    nome
    prioridade
    status
  }
}`

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
            tdNome.textContent = chamado.nome

            const tdBancada = document.createElement('td')
            tdBancada.textContent = chamado.idBancada

            const tddataHora = document.createElement('td')
            tddataHora.textContent = chamado.dataHora

            const tdDescricao = document.createElement('td')
            tdDescricao.innerHTML = `<button type="submit" class="ui button desc" onclick="Swal.fire('Descrição ID ${chamado.idChamado}', '${chamado.descricao}' , 'info')">Ver</button>`

            const tdPrioridade = document.createElement('td')
            tdPrioridade.textContent = chamado.prioridade

            const tdStatus = document.createElement('td')
            tdStatus.textContent = chamado.status

            tr.appendChild(tdCheckbox)
            tr.appendChild(tdChamado)
            tr.appendChild(tdNome)
            tr.appendChild(tdBancada)
            tr.appendChild(tddataHora)
            tr.appendChild(tdDescricao)
            tr.appendChild(tdPrioridade)
            tr.appendChild(tdStatus)

            tbody.appendChild(tr)
          })
        },
        (error) => {
          console.log(error)
        }
      )
    }
  }
}
</script>

<style src="../assets/pages.css"></style>
