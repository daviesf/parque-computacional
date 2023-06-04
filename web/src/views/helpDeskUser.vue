<template>
  <section class="home-section">
    <div class="ui container">
      <span class="text titlep">
        <h1>HelpDesk</h1>
      </span>
      <div class="ui two column grid">
        <div class="column">
          <div class="ui segment">
            <h3 class="ui header">Novo Chamado</h3>
            <form id="form" class="ui form">
              <div class="field">
                <label>Nome</label>
                <input type="text" name="name" placeholder="Nome completo" class="required" id="campo"
                  @input="nomeValidate" />
                <span class="span-required">Insira o Nome</span>
              </div>
              <div class="field">
                <label>E-mail</label>
                <input type="email" name="email" placeholder="E-mail" class="required" id="campo"
                  @input="emailValidate" />
                <span class="span-required">Insira um e-mail válido</span>
              </div>
              <div class="field">
                <label>Assunto</label>
                <input type="text" name="subject" placeholder="Assunto" class="required" id="campo"
                  @input="assuntoValidate" />
                <span class="span-required">Insira o Assunto</span>
              </div>
              <div class="field">
                <label>Descrição</label>
                <textarea name="description" rows="2" class="auto-expand required" id="campo"
                  @input="descricaoValidate"></textarea>
                <span class="span-required">Insira a Descrição</span>
              </div>
              <button type="submit" class="ui button">Enviar</button>
            </form>
          </div>
        </div>
        <div class="column">
          <div class="ui segment">
            <h3 class="ui header">Chamados Anteriores</h3>
            <table class="ui celled table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>E-mail</th>
                  <th>Assunto</th>
                  <th>Descrição</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody id="tableBody"></tbody>
            </table>
          </div>
        </div>
      </div>

    </div>

  </section>
</template>

<script>
export default {
  name: 'HelpDeskUser',
  mounted() {
    // eslint-disable-next-line no-undef
    const form = $('#form')
    // eslint-disable-next-line no-undef
    const tableBody = $('#tableBody')

    form.submit(function (event) {
      event.preventDefault()

      const formData = form.serializeArray()

      const data = {}
      for (let i = 0; i < formData.length; i++) {
        data[formData[i].name] = formData[i].value
      }

      addRow(data)
    })

    // eslint-disable-next-line no-undef
    $('.auto-expand').on('input', function () {
      this.style.height = 'auto'
      this.style.height = this.scrollHeight + 'px'
    })

    function addRow(data) {
      // eslint-disable-next-line no-undef
      const newRow = $('<tr>')

      // eslint-disable-next-line no-undef
      const name = $('<td>').text(data.name)
      // eslint-disable-next-line no-undef
      const email = $('<td>').text(data.email)
      // eslint-disable-next-line no-undef
      const subject = $('<td>').text(data.subject)
      // eslint-disable-next-line no-undef
      const description = $('<td>').text(data.description)
      // eslint-disable-next-line no-undef
      const status = $('<td>').text('Pendente')

      newRow.append(name)
      newRow.append(email)
      newRow.append(subject)
      newRow.append(description)
      newRow.append(status)

      tableBody.append(newRow)
    }

    //Validação do form
    const formulario = document.getElementById('form')
    const campos = document.querySelectorAll('.required')
    const spans = document.querySelectorAll('.span-required')

    formulario.addEventListener('submit', (event) => {
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
        { index: 2, isValid: assuntoValidate },
        { index: 3, isValid: descricaoValidate }
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

    function assuntoValidate() {
      return campos[2].value !== 'Selecione a bancada'
    }

    function descricaoValidate() {
      return campos[3].value !== 'Selecione o tipo'
    }
  }
}
</script>

<style src="../assets/pages.css"></style>
