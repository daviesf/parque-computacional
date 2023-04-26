<template>
  <section class="home-section">
    <span class="text titlep"><h1>Tela de Patrimônios Cadastrados</h1></span>
    <div class="ui container table-p">
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
            <th>Marca</th>
            <th>Modelo</th>
            <th>Tipo</th>
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
              <div class="ui right floated small primary labeled icon button" id="add-patrimonio">
                <i class="keyboard outline icon"></i> Adicionar Patrimônio
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
  </section>
  <div class="dimmer">
    <div class="ui container add-form">
      <h2 class="ui dividing header">Adicionar Patrimônio</h2>
      <form class="ui form">
        <div class="field">
          <label>Bancada</label>
          <select name="tipo">
            <option class="placeholder" disabled selected>Selecione a bancada</option>
            <option value="b1">Nenhuma (ID: 0)</option>
            <option value="b2">ID: 22 | Bancada de Informática</option>
            <option value="b3">ID: 23 | Bancada de Almoxarifado</option>
            <option value="b4">ID: 24 | Bancada do RU</option>
          </select>
        </div>
        <div class="field">
          <label>Marca</label>
          <input type="text" name="marca" placeholder="Marca" />
        </div>
        <div class="field">
          <label>Modelo</label>
          <input type="text" name="modelo" placeholder="Modelo" />
        </div>
        <div class="field">
          <label>Tipo</label>
          <select name="tipo">
            <option class="placeholder" disabled selected>Selecione o tipo</option>
            <option value="desktop">Desktop</option>
            <option value="notebook">Notebook</option>
            <option value="impressora">Impressora</option>
            <option value="monitor">Monitor</option>
          </select>
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
</template>

<script>
export default {
  name: 'Patrimonio',
  mounted(){
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
$(document).ready(function () {
  $('#add-patrimonio').on('click', function () {
    $('.add-form').addClass('open')
  })
})

// Faz o dimmer aparecer ao clicar no botão "Adicionar Patrimônio" e desaparecer ao clicar fora do pop-up.
$(document).ready(function () {
  $('#add-patrimonio').click(function (e) {
    e.preventDefault()
    $('.dimmer').fadeIn()
  })

  $('.dimmer').click(function (e) {
    if ($(e.target).hasClass('dimmer')) {
      $(this).fadeOut()
    }
  })
})

// Oculta o pop-up e o dimmer ao clicar no botão "Cancelar"
$(document).ready(function () {
  $('.cancel-button').click(function () {
    $('.popup').hide()
    $('.dimmer').hide()
  })

  // Oculta o pop-up e o dimmer ao pressionar a tecla "Esc"
  $(document).keydown(function (event) {
    if (event.keyCode == 27) {
      $('.popup').hide()
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
  }
}

</script>

<style src="../assets/patrimonio.css"></style>
