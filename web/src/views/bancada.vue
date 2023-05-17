<template>
  <section class="home-section">
    <span class="text titlep"><h1>Tela de Bancadas Cadastradas</h1></span>
    <div class="ui container table-p">
      <div class="ui stackable grid">
        <div class="five wide column" style="margin-top: 30px">
          <div class="ui vertical menu">
            <div class="header item">Filtros</div>

            <div class="accordion">
              <div class="accordion-header">
                <span>Bancada</span>
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
                <span>Apelido</span>
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
                <span>Local</span>
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
                <span>Status</span>
                <span class="accordion-icon">+</span>
              </div>
              <div class="accordion-body">
                <div class="ui checkbox">
                  <input type="checkbox" name="example" />
                  <label>Ativo</label>
                </div>
                <br /><br />
                <div class="ui checkbox">
                  <input type="checkbox" name="example" />
                  <label>Inativo</label>
                </div>
                <br /><br />
                <div class="ui checkbox">
                  <input type="checkbox" name="example" />
                  <label>Em manutenção</label>
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
                <th>Bancada</th>
                <th>Apelido</th>
                <th>Local</th>
                <th>Status</th>
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
                <td>Jeferson</td>
                <td>Escritório 8</td>
                <td>Ativo</td>
              </tr>
              <tr>
                <td class="collapsing">
                  <div class="ui fitted checkbox">
                    <input type="checkbox" class="select-checkbox" /> <label></label>
                  </div>
                </td>
                <td>8</td>
                <td>Bruno</td>
                <td>R.U.</td>
                <td>Em manutenção</td>
              </tr>

              <tr>
                <td class="collapsing">
                  <div class="ui fitted checkbox">
                    <input type="checkbox" class="select-checkbox" /> <label></label>
                  </div>
                </td>
                <td>12</td>
                <td>Adm</td>
                <td>FCA</td>
                <td>Desativado</td>
              </tr>
              <tr>
                <td class="collapsing">
                  <div class="ui fitted checkbox">
                    <input type="checkbox" class="select-checkbox" /> <label></label>
                  </div>
                </td>
                <td>2</td>
                <td>Adm2</td>
                <td>SAR</td>
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
                    <i class="server icon"></i> Adicionar Bancada
                  </div>
                  <div class="ui small button">Excluir</div>
                  <div class="ui small button">Alterar</div>
                  <div class="ui small button">Ativar</div>
                  <div class="ui small button">Desativar</div>
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
    <!-- Pop-up de cadastro de patrimônio -->
    <div class="dimmer">
      <div class="ui container add-form">
        <h2 class="ui dividing header">Adicionar Bancada</h2>
        <form class="ui form">
          <div class="field">
            <label>Apelido</label>
            <input type="text" name="marca" placeholder="Apelido" />
          </div>
          <div class="field">
            <label>Local</label>
            <input type="text" name="modelo" placeholder="Local" />
          </div>

          <div class="field">
            <label>Status</label>
            <select name="status">
              <option class="placeholder" disabled selected>Selecione o status</option>
              <option value="ativo">Ativo</option>
              <option value="inativo">Inativo</option>
              <option value="manutencao">Em manutenção</option>
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
  name: 'Bancada',
  methods() {
    // Filtro
    const accordions = document.querySelectorAll('.accordion')

    accordions.forEach((accordion) => {
      const accordionHeader = accordion.querySelector('.accordion-header')
      accordionHeader.addEventListener('click', () => {
        accordion.classList.toggle('active')
      })
    })
  },
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

    // Exibe o pop-pup ao clicar no botão "Adicionar Bancada"
    // eslint-disable-next-line no-undef
    $(document).ready(function () {
      // eslint-disable-next-line no-undef
      $('#add-patrimonio').on('click', function () {
        // eslint-disable-next-line no-undef
        $('.add-form').addClass('open')
      })
    })

    // Faz o dimmer aparecer ao clicar no botão "Adicionar Bancada" e desaparecer ao clicar fora do pop-up.
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
