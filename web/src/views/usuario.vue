<template>
  <section class="home-section">
    <span class="text titlep"><h1>Tela de Usuários Cadastrados</h1></span>
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
                  <input type="text" placeholder="Nome do Funcionário" class="fluid" id="filter-nome" />
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
                  <input type="text" placeholder="E-mail do Funcionário" class="fluid" id="filter-email" />
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
                  <input type="text" placeholder="ID da bancada" class="fluid" id="filter-bancada" />
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
                      <input type="checkbox" id="cb-gerente" />
                      <label>Gerente</label>
                    </div>
                    <div class="ui checkbox">
                      <input type="checkbox" id="cb-estagiario" />
                      <label>Estagiário</label>
                    </div>
                  </div>
                  <div class="column">
                    <div class="ui checkbox">
                      <input type="checkbox" id="cb-clt" />
                      <label>CLT</label>
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
          <table class="ui compact celled definition table">
            <thead>
              <tr>
                <td class="collapsing">
                  <div class="ui fitted checkbox">
                    <input type="checkbox" id="select-all" />
                    <label></label>
                  </div>
                </td>
                <th class="wide-150">Nome</th>
                <th>E-mail</th>
                <th class="wide-80">Bancada</th>
                <th class="wide-100">Tipo</th>
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
                <td>Roberto</td>
                <td>r@gmail.com</td>
                <td>8</td>
                <td>Gerente</td>
                <td>Ativo</td>
              </tr>
              <tr>
                <td class="collapsing">
                  <div class="ui fitted checkbox">
                    <input type="checkbox" class="select-checkbox" /> <label></label>
                  </div>
                </td>
                <td>Zé</td>
                <td>ze@gmail.com</td>
                <td>12</td>
                <td>Estagiário</td>
                <td>Desligado</td>
              </tr>

              <tr>
                <td class="collapsing">
                  <div class="ui fitted checkbox">
                    <input type="checkbox" class="select-checkbox" /> <label></label>
                  </div>
                </td>
                <td>Roberto</td>
                <td>r@gmail.com</td>
                <td>8</td>
                <td>Gerente</td>
                <td>Ativo</td>
              </tr>
              <tr>
                <td class="collapsing">
                  <div class="ui fitted checkbox">
                    <input type="checkbox" class="select-checkbox" /> <label></label>
                  </div>
                </td>
                <td>Zé</td>
                <td>ze@gmail.com</td>
                <td>12</td>
                <td>Estagiário</td>
                <td>Desligado</td>
              </tr>
            </tbody>
            <tfoot class="full-width">
              <tr>
                <th></th>
                <th colspan="5">
                  <div
                    class="ui right floated small labeled icon button"
                    id="add-patrimonio"
                  >
                    <i class="user outline icon"></i> Adicionar Funcionário
                  </div>
                  <div class="ui left floated small button">Excluir</div>
                  <div class="ui left floated small button">Alterar</div>
                  <div class="ui left floated small button">Ativar</div>
                  <div class="ui left floated small button">Desligar</div>
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
            <label>Bancada</label>
            <select name="tipo" class="campo required" id="bancada" @change="bancadaValidate">
              <option class="placeholder" disabled selected>Selecione a bancada</option>
              <option value="b1">Nenhuma (ID: 0)</option>
              <option value="b2">ID: 22 | Bancada de Informática</option>
              <option value="b3">ID: 23 | Bancada de Almoxarifado</option>
              <option value="b4">ID: 24 | Bancada do RU</option>
            </select>
            <span class="span-required">Selecione alguma Bancada</span>
          </div>
          <div class="field">
            <label>Tipo</label>
            <select name="tipo" class="campo required" id="tipo" @change="tipoValidate">
              <option class="placeholder" disabled selected>Selecione o tipo</option>
              <option value="Gerente">Gerente</option>
              <option value="Estagiário">Estagiário</option>
              <option value="CLT">CLT</option>
            </select>
            <span class="span-required">Selecione algum Tipo</span>
          </div>
          <div class="field">
            <label>Status</label>
            <select name="status" class="campo required" id="status" @change="statusValidate">
              <option class="placeholder" disabled selected>Selecione o status</option>
              <option value="ativo">Ativo</option>
              <option value="desligado">Desligado</option>
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
  name: 'Usuario',
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

    // Exibe o pop-pup ao clicar no botão "Adicionar Patrimônio"
    // eslint-disable-next-line no-undef
    $(document).ready(function () {
      // eslint-disable-next-line no-undef
      $('#add-patrimonio').on('click', function () {
        // eslint-disable-next-line no-undef
        $('.add-form').addClass('open')
      })
    })

    // Faz o dimmer aparecer ao clicar no botão "Adicionar Patrimônio" e desaparecer ao clicar fora do pop-up.
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
        { index: 2, isValid: bancadaValidate },
        { index: 3, isValid: tipoValidate },
        { index: 4, isValid: statusValidate }
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

    function bancadaValidate() {
      return campos[2].value !== 'Selecione a bancada'
    }

    function tipoValidate() {
      return campos[3].value !== 'Selecione o tipo'
    }

    function statusValidate() {
      return campos[4].value !== 'Selecione o status'
    }
  }
}
</script>

<style src="../assets/pages.css"></style>
