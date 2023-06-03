<template>
  <section class="home-section">
    <span class="text titlep">
      <h1>Tela de Patrimônios Cadastrados</h1>
    </span>
    <div class="ui container table-p">
      <div class="ui stackable grid">
        <div class="five wide column" style="margin-top: 30px">
          <div class="ui vertical menu">
            <div class="header item">Filtros</div>

            <div class="accordion">
              <div class="accordion-header">
                <span>Código</span>
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
                <br /><br />
                <div class="ui icon input fluid">
                  <input type="text" placeholder="Pesquisar..." class="fluid" />
                  <i class="search icon"></i>
                </div>
              </div>
            </div>
            <div class="accordion">
              <div class="accordion-header">
                <span>Marca</span>
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
                <span>Modelo</span>
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
                <span>Tipo</span>
                <span class="accordion-icon">+</span>
              </div>
              <div class="accordion-body">
                <div class="ui checkbox">
                  <input type="checkbox" name="example" />
                  <label>Impressora</label>
                </div>
                <br /><br />
                <div class="ui checkbox">
                  <input type="checkbox" name="example" />
                  <label>Teclado</label>
                </div>
                <br /><br />
                <div class="ui checkbox">
                  <input type="checkbox" name="example" />
                  <label>Mouse</label>
                </div>
                <br /><br />
                <div class="ui checkbox">
                  <input type="checkbox" name="example" />
                  <label>Notebook</label>
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
              </div>
            </div>

            <div class="item">
              <div class="ui icon input fluid">
                <div class="ui floated small primary labeled icon button" id="filter">
                  <i class="search icon"></i> Aplicar Filtro
                </div>
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
                <th class="wide-100">Código</th>
                <th class="wide-100">Bancada</th>
                <th class="wide-130">Marca</th>
                <th class="wide-130">Modelo</th>
                <th class="wide-130">Tipo</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody id="patrimonio-table-body"></tbody>
            <tfoot class="full-width">
              <tr>
                <th></th>
                <th colspan="6">
                  <div class="ui right floated small primary labeled icon button" id="add-patrimonio">
                    <i class="keyboard outline icon"></i> Adicionar Patrimônio
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
    <!-- Pop-up de cadastro de patrimônio -->
    <div class="dimmer">
      <div class="ui container add-form">
        <h2 class="ui dividing header">Adicionar Patrimônio</h2>
        <form class="ui form" id="form">
          <div class="field">
            <label>Código</label>

            <input
              type="text"
              name="codigo"
              placeholder="Código do Patrimônio"
              class="required"
              id="campo"
              oninput="codigoValidate()"
            />
            <span class="span-required">Insira o código do Patrimônio</span>

          </div>
          <div class="field">
            <label>Bancada</label>
            <select name="tipo" class="required" id="bancada" oninput="bancadaValidate()">
              <option class="placeholder" disabled selected>Selecione a bancada</option>
              <option value="0">Nenhuma (ID: 0)</option>
              <option value="1">ID: 1 | Bancada de Informática</option>
              <option value="3">ID: 23 | Bancada de Almoxarifado</option>
              <option value="4">ID: 24 | Bancada do RU</option>
            </select>
            <span class="span-required">Selecione 1 Bancada</span>
          </div>
          <div class="field">
            <label>Marca</label>
            <input type="text" name="marca" placeholder="Marca" class="required" id="marca" oninput="marcaValidate()" />
            <span class="span-required">Inisira a Marca</span>
          </div>
          <div class="field">
            <label>Modelo</label>
            <input type="text" name="modelo" placeholder="Modelo" class="required" id="modelo" />
            <span class="span-required">Insira o Modelo</span>
          </div>
          <div class="field">
            <label>Tipo</label>
            <select name="tipo" class="required" id="tipo" oninput="tipoValidate()">
              <option class="placeholder" disabled selected>Selecione o tipo</option>
              <option value="desktop">Desktop</option>
              <option value="notebook">Notebook</option>
              <option value="impressora">Impressora</option>
              <option value="monitor">Monitor</option>
            </select>
            <span class="span-required">Selecione um tipo</span>
          </div>
          <div class="field">
            <label>Status</label>
            <select name="status" class="required" id="status" oninput="statusValidate()">
              <option class="placeholder" disabled selected>Selecione o status</option>
              <option value="ativo">Ativo</option>
              <option value="inativo">Inativo</option>
              <option value="manutencao">Em manutenção</option>
            </select>
            <span class="span-required">Selecione o Status</span>
          </div>
          <button class="ui submit button" type="submit" id="submit-patrimonio">Adicionar</button>
          <button class="ui button cancel-button" id="cancel-button">Cancelar</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Patrimonio',
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
    document.getElementById('add-patrimonio').addEventListener('click', () => {
      // eslint-disable-next-line no-undef
      $('.add-form').addClass('open')
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
        { index: 0, isValid: codigoValidate },
        { index: 1, isValid: bancadaValidate },
        { index: 2, isValid: marcaValidate },
        { index: 3, isValid: modeloValidate },
        { index: 4, isValid: tipoValidate },
        { index: 5, isValid: statusValidate }
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

    function codigoValidate() {
      return campos[0].value.length > 0
    }

    function bancadaValidate() {
      return campos[1].value !== 'Selecione a bancada'
    }

    function marcaValidate() {
      return campos[2].value.length > 0
    }

    function modeloValidate() {
      return campos[3].value.length > 0
    }

    function tipoValidate() {
      return campos[4].value !== 'Selecione o tipo'
    }

    function statusValidate() {
      return campos[5].value !== 'Selecione o status'
    }

    // load data
    const query = `query Query {
  patrimonios {
    idBancada
    marca
    modelo
    tipo
    status
  }
}`

    axios.post('http://localhost:4000', { query }).then(
      (result) => {
        // Supondo que a variável "result" contenha o objeto com os dados retornados da busca
        const patrimonios = result.data.data.patrimonios

        const tbody = document.getElementById('patrimonio-table-body')

        patrimonios.forEach((patrimonio) => {
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

          const tdBancada = document.createElement('td')
          tdBancada.textContent = patrimonio.idBancada

          const tdMarca = document.createElement('td')
          tdMarca.textContent = patrimonio.marca

          const tdModelo = document.createElement('td')
          tdModelo.textContent = patrimonio.modelo

          const tdTipo = document.createElement('td')
          tdTipo.textContent = patrimonio.tipo

          const tdStatus = document.createElement('td')
          tdStatus.textContent = patrimonio.status

          tr.appendChild(tdCheckbox)
          tr.appendChild(tdBancada)
          tr.appendChild(tdMarca)
          tr.appendChild(tdModelo)
          tr.appendChild(tdTipo)
          tr.appendChild(tdStatus)

          tbody.appendChild(tr)
        })
      },
      (error) => {
        console.log(error)
      }
    )

    // cadastrar
    const addPatrimonio = document.getElementById('submit-patrimonio');
    addPatrimonio.addEventListener('click', function () {
      console.log("Iniciando cadastro");
      let cod = (document.getElementById('codigo').value);
      let bancada = (document.getElementById('bancada').value);
      let marca = document.getElementById('marca').value;
      let modelo = document.getElementById('modelo').value;
      let tipo = document.getElementById('tipo').value;
      let status = document.getElementById('status').value;
      console.log("Verificando status");

      console.log("Query")

      const query = `mutation Mutation($data: dadosPatrimonio) {
  createPatrimonio(data: $data) {
    idPatrimonio
    marca
    modelo
    status
    tipo
    idBancada
  }
}`

      console.log("Variáveis");

      const variables = {
        data: {
          idPatrimonio: parseInt(cod),
          idBancada: parseInt(bancada),
          marca: marca,
          modelo: modelo,
          tipo: tipo,
          status: status
        }
      };



      console.log(variables)

      axios.post('http://localhost:4000', { query, variables }).then(
        (result) => {
          console.log(result)
          // window.location.reload()
        },
        (error) => {
          console.log(error)
        }
      )
    })

  }
}
</script>

<style src="../assets/pages.css"></style>
