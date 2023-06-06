<template>
  <section class="home-section">
    <span class="text titlep">
      <h1>Tela de Bancadas Cadastradas</h1>
    </span>
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
                <div class="ui icon input fluid">
                  <input type="text" placeholder="ID da bancada" class="fluid" id="filter-bancada" />
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
                  <input type="text" placeholder="Apelido da bancada" class="fluid" id="filter-apelido" />
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
                  <input type="text" placeholder="Local da bancada" class="fluid" id="filter-local" />
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
                <th class="wide-100">Bancada</th>
                <th class="wide-200">Apelido</th>
                <th class="wide-200">Local</th>
                <th class="wide-150">Status</th>
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
                  <div class="ui right floated small labeled icon button" id="add-patrimonio">
                    <i class="server icon"></i> Adicionar Bancada
                  </div>
                  <div class="ui left floated small button">Excluir</div>
                  <div class="ui left floated small button">Alterar</div>
                  <div class="ui left floated small button">Ativar</div>
                  <div class="ui left floated small button">Desativar</div>
                </th>
              </tr>
            </tfoot>
          </table>
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
            <input type="text" name="marca" placeholder="Apelido" class="campo required" id="apelido" @input="apelidoValidate"/>
            <span class="span-required">Inisira o Apelido</span>
          </div>
          <div class="field">
            <label>Local</label>
            <input type="text" name="modelo" placeholder="Local" class="campo required" id="local" @input="localValidate"/>
            <span class="span-required">Inisira o Local</span>
          </div>

          <div class="field">
            <label>Status</label>
            <select name="status" class="campo required" id="status" @change="statusValidate">
              <option class="placeholder" disabled selected>Selecione o status</option>
              <option value="ativo">Ativo</option>
              <option value="inativo">Inativo</option>
              <option value="manutencao">Em manutenção</option>
            </select>
            <span class="span-required">Selecione algum Status</span>
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

    function apelidoValidate() {
      return campos[0].value.length > 0
    }

    function localValidate() {
      return campos[1].value.length > 0
    }

    function statusValidate() {
      return campos[2].value !== 'Selecione o status'
    }
  }
}
</script>

<style src="../assets/pages.css"></style>
