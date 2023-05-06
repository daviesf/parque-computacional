<template>
  <section class="home-section">
    <div class="ui container">
      <span class="text titlep">
        <h1>HelpDesk</h1>
      </span>
      <div class="ui segment">
        <h3 class="ui header">Novo Chamado</h3>
        <form id="form" class="ui form">
          <div class="field">
            <label>Nome</label>
            <input type="text" name="name" placeholder="Nome completo" />
          </div>
          <div class="field">
            <label>E-mail</label>
            <input type="email" name="email" placeholder="E-mail" />
          </div>
          <div class="field">
            <label>Assunto</label>
            <input type="text" name="subject" placeholder="Assunto" />
          </div>
          <div class="field">
            <label>Descrição</label>
            <textarea name="description" rows="2" class="auto-expand"></textarea>
          </div>
          <button type="submit" class="ui button">Enviar</button>
        </form>
      </div>
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
  </section>
</template>

<script>
export default {
  name: 'HelpDesk',
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
  }
}
</script>

<style src="../assets/pages.css">
</style>