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
                <div class="ui checkbox">
                  <input type="checkbox" name="example" />
                  <label>A-Z</label>
                </div>
                <br /><br />
                <div class="ui checkbox">
                  <input type="checkbox" name="example" />
                  <label>Z-A</label>
                </div>
                <br /><br />
                <div class="ui icon input fluid">
                  <input type="text" placeholder="Pesquisar..." class="fluid" />
                  <i class="search icon"></i>
                </div>
              </div>
            </div>
            <div class="accordion">
              <div class="accordion-header">
                <span>Número</span>
                <span class="accordion-icon">+</span>
              </div>
              <div class="accordion-body">
                <div class="ui checkbox">
                  <input type="checkbox" name="example" />
                  <label>Maior</label>
                </div>
                <br /><br />
                <div class="ui checkbox">
                  <input type="checkbox" name="example" />
                  <label>Menor</label>
                </div>
                <br /><br />
                <div class="ui icon input fluid">
                  <input type="text" placeholder="Pesquisar..." class="fluid" />
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
                <div class="ui checkbox">
                  <input type="checkbox" name="example" />
                  <label>A-Z</label>
                </div>
                <br /><br />
                <div class="ui checkbox">
                  <input type="checkbox" name="example" />
                  <label>Z-A</label>
                </div>
                <br /><br />
                <div class="ui icon input fluid">
                  <input type="text" placeholder="Pesquisar..." class="fluid" />
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
                <div class="ui checkbox">
                  <input type="checkbox" name="example" />
                  <label>Pendente</label>
                </div>
                <br /><br />
                <div class="ui checkbox">
                  <input type="checkbox" name="example" />
                  <label>Resolvido</label>
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
          <table class="ui compact celled definition table">
            <thead>
              <tr>
                <td class="collapsing">
                  <div class="ui fitted checkbox">
                    <input type="checkbox" id="select-all" />
                    <label></label>
                  </div>
                </td>
                <th class="wide-100"> Nome </th>
                <th class="wide-80"> Bancada </th>
                <th class="wide-100"> Data e hora </th>
                <th class="wide-200"> Descrição </th>
                <th class="wide-100">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="collapsing">
                  <div class="ui fitted checkbox">
                    <input type="checkbox" class="select-checkbox" /> <label></label>
                  </div>
                </td>
                <td>Pedro Alves</td>
                <td>22</td>
                <td>01/01/1998 & 06:00</td>
                <td>Impressora não funciona, chamar um tecnico</td>
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
                <td>Deve-se chamar um tecnico capacitado para instalar RTX4090</td>
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
                <td>Comprar nova memória</td>
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
                <td>Chamar tecnico capacitado para instalar Icore13900k</td>
                <td>Resolvido</td>
              </tr>
            </tbody>
            <tfoot class="full-width">
              <tr>
                <th></th>
                <th colspan="5">
                  <div
                    class="ui right floated small primary labeled icon button"
                    id="add-patrimonio"
                  >
                    <i class="keyboard outline icon"></i> Resolver chamada
                  </div>
                  <div class="ui left floated small button">Visualizar</div>
                  <div class="ui left floated small button">Tornar Pendente</div>
                  <div class="ui left floated small button">Remover Chamada</div>
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HelpDesk',
  mounted() {
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

    //filtros
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
