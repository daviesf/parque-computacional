// Selecione todos os checkboxes quando o checkbox geral é selecionado
document.getElementById("select-all").addEventListener("click", function () {
    var checkboxes = document.getElementsByClassName("select-checkbox");
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = this.checked;
    }
  });

  // Deselecione o checkbox geral se algum checkbox individual for desmarcado
  var checkboxes = document.getElementsByClassName("select-checkbox");
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("click", function () {
      if (!this.checked) {
        document.getElementById("select-all").checked = false;
      }
    });
  }

  // Exibe o pop-pup ao clicar no botão "Adicionar Patrimônio"
  $(document).ready(function () {
    $('#add-patrimonio').on('click', function () {
      $('.add-form').addClass('open');
    });
  });

  // Faz o dimmer aparecer ao clicar no botão "Adicionar Patrimônio" e desaparecer ao clicar fora do pop-up.
  $(document).ready(function () {
    $("#add-patrimonio").click(function (e) {
      e.preventDefault();
      $(".dimmer").fadeIn();
    });

    $(".dimmer").click(function (e) {
      if ($(e.target).hasClass("dimmer")) {
        $(this).fadeOut();
      }
    });
  });

  // Oculta o pop-up e o dimmer ao clicar no botão "Cancelar"
  $(document).ready(function () {
    $('.cancel-button').click(function () {
      $('.popup').hide();
      $('.dimmer').hide();
    });

    // Oculta o pop-up e o dimmer ao pressionar a tecla "Esc"
    $(document).keydown(function (event) {
      if (event.keyCode == 27) {
        $('.popup').hide();
        $('.dimmer').hide();
      }
    });
  });

  // Placeholder
  const tipoSelect = document.querySelector('select[name="tipo"]');
  tipoSelect.addEventListener('change', () => {
    if (tipoSelect.value === '') {
      tipoSelect.classList.add('placeholder');
    } else {
      tipoSelect.classList.remove('placeholder');
    }
  });
