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
                <div class="ui checkbox">
                  <input type="checkbox" name="example" />
                  <label>Maior</label>
                </div>
                <br /><br />
                <div class="ui checkbox">
                  <input type="checkbox" name="example" />
                  <label>Menor</label>
                </div>
              </div>
            </div>
            <div class="accordion">
              <div class="accordion-header">
                <span>Patrimônio</span>
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
              </div>
            </div>
            <div class="accordion">
              <div class="accordion-header">
                <span>Funcionário</span>
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
              </div>
            </div>
            <div class="accordion">
              <div class="accordion-header">
                <span>Data</span>
                <span class="accordion-icon">+</span>
              </div>
              <div class="accordion-body">
                <div class="ui checkbox">
                  <input type="date" name="example" />
                </div>
              </div>
            </div>

            <div class="item">
              <div class="ui icon input fluid">
                <input type="text" placeholder="Pesquisar..." class="fluid" />
                <i class="search icon"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="eleven wide column" style="margin-top: 30px">
          <table class="ui compact celled definition table">
            <thead>
              <tr>
                <td class="collapsing">
                  <div class="ui fitted checkbox">
                    <input type="checkbox" id="select-all" />
                    <label></label>
                  </div>
                </td>
                <th>ID de Manutenção</th>
                <th>Patrimônio</th>
                <th>Funcionário</th>
                <th>Data</th>
                <th>Detalhes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="collapsing">
                  <div class="ui fitted checkbox">
                    <input type="checkbox" class="select-checkbox" /> <label></label>
                  </div>
                </td>
                <td>5</td>
                <td>HP</td>
                <td>HP-750</td>
                <td>Impressora</td>
                <td>Ativo</td>
              </tr>
              <tr>
                <td class="collapsing">
                  <div class="ui fitted checkbox">
                    <input type="checkbox" class="select-checkbox" /> <label></label>
                  </div>
                </td>
                <td>8</td>
                <td>Logitech</td>
                <td>G-213</td>
                <td>Teclado</td>
                <td>Ativo</td>
              </tr>

              <tr>
                <td class="collapsing">
                  <div class="ui fitted checkbox">
                    <input type="checkbox" class="select-checkbox" /> <label></label>
                  </div>
                </td>
                <td>12</td>
                <td>Multilaser</td>
                <td>MT-687</td>
                <td>Mouse</td>
                <td>Inativo</td>
              </tr>
              <tr>
                <td class="collapsing">
                  <div class="ui fitted checkbox">
                    <input type="checkbox" class="select-checkbox" /> <label></label>
                  </div>
                </td>
                <td>2</td>
                <td>Samsung</td>
                <td>Book X50</td>
                <td>Notebook</td>
                <td>Ativo</td>
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
                    <i class="wrench icon"></i> Adicionar Manutenção
                  </div>
                  <div class="ui left floated small button">Excluir</div>
                  <div class="ui left floated small button">Alterar</div>
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
    <!-- Pop-up de cadastro de Manutenção -->
    <div class="dimmer">
      <div class="ui container add-form">
        <h2 class="ui dividing header">Adicionar Manutenção</h2>
        <form class="ui form">
          <div class="field">
            <label>Patrimônio</label>
            <select name="tipo">
              <option class="placeholder" disabled selected>Selecione o patrimônio</option>
              <option value="b1">Nenhuma (ID: 0)</option>
              <option value="b2">ID: 22 | Mouse</option>
              <option value="b3">ID: 23 | Notebook</option>
              <option value="b4">ID: 24 | Impressora</option>
            </select>
          </div>
          <div class="field">
            <label>Detalhes da Manutenção</label>
            <input type="text" name="detalhes" placeholder="Detalhes" />
          </div>
          <div class="field">
            <label>Data</label>
            <input type="date" name="modelo" placeholder="Modelo" />
          </div>
          <div class="field">
            <label>Pertencente ao Funcionário:</label>
            <select name="tipo">
              <option class="placeholder" disabled selected>Selecione o Funcionário</option>
              <option value="Jeferson">Jeferson</option>
              <option value="Camila">Camila</option>
              <option value="Murilo">Murilo</option>
              <option value="Ernesto">Ernesto</option>
            </select>
          </div>
          <button class="ui submit button" type="submit">Adicionar</button>
          <button class="ui button cancel-button" id="cancel-button">Cancelar</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Manutencao',
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

    // Exibe o pop-pup ao clicar no botão "Adicionar Manutenção"
    // eslint-disable-next-line no-undef
    $(document).ready(function () {
      // eslint-disable-next-line no-undef
      $('#add-patrimonio').on('click', function () {
        // eslint-disable-next-line no-undef
        $('.add-form').addClass('open')
      })
    })

    // Faz o dimmer aparecer ao clicar no botão "Adicionar Manutenção" e desaparecer ao clicar fora do pop-up.
    // eslint-disable-next-line no-undef
    $(document).ready(function () {
      // eslint-disable-next-line no-undef
      $('#add-patrimonio').click(function (e) {
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
  }
}
</script>

<style src="../assets/pages.css"></style>
