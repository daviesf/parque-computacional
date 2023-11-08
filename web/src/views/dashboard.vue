<template>
  <div class="home-section">
    <h1>Dashboard informativo PowerBI</h1>
    <iframe title="Report Section" id="dash"
      src="https://app.powerbi.com/view?r=eyJrIjoiZjE4OWNlYTUtOTc3Ni00NjUxLTgwN2EtNjdhYTFhMjczMDQwIiwidCI6ImI0NzQxYTgyLTZiNmUtNDNhNS1hZDZlLTEwNDQ1MTFhYWVkNiJ9"
      frameborder="0" allowFullScreen="true"></iframe>
    <div class="ui grid centered" onclick="imprimir()" id="print">
      <button class="button2">
        <span class="button2-content">Imprimir</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  mounted() {
    document.getElementById('print').addEventListener('click', imprimir)
    function imprimir() {
      var iframe = document.getElementById('dash')

      if (iframe) {
        // Clona o iframe para evitar alterações indesejadas
        var clone = iframe.cloneNode(true)

        // Cria uma nova janela e insere o clone do iframe nela
        var novaJanela = window.open('', '', 'width=1000,height=600')
        novaJanela.document.body.appendChild(clone)
        novaJanela.document.title = 'Dashboard informativo'

        var styleElement = novaJanela.document.createElement('style')
        styleElement.type = 'text/css'
        styleElement.textContent = `
  @media print {
    @page {
      size: landscape;
    }
    #dash {
      width: 100%; /* Defina a largura desejada */
      height: 700px; /* Defina a altura desejada */
    }
  }
`

        // Adicione o elemento 'style' ao cabeçalho do documento da nova janela
        novaJanela.document.head.appendChild(styleElement)

        // Oculte o iframe original

        var mensagem = novaJanela.document.createElement('div')
        mensagem.style.width = '100%'
        mensagem.style.height = '100%'
        mensagem.style.display = 'flex'
        mensagem.style.justifyContent = 'center'
        mensagem.style.alignItems = 'center'
        mensagem.style.backgroundColor = 'white'
        mensagem.style.fontSize = '24px'
        mensagem.style.fontWeight = 'bold'
        mensagem.style.textAlign = 'center'
        mensagem.style.position = 'absolute'
        mensagem.style.top = '50%'
        mensagem.style.left = '50%'
        mensagem.style.transform = 'translate(-50%, -50%)'
        mensagem.style.fontFamily = 'Arial'
        novaJanela.document.body.appendChild(mensagem)

        var segundos = 5
        function atualizarMensagem() {
          if (segundos % 2 == 0 && segundos != 0) {
            mensagem.innerText = 'Carregando' + '...'
            segundos--
            setTimeout(atualizarMensagem, 1000) // Chama novamente a cada segundo
          } else if (segundos % 2 != 0) {
            mensagem.innerText = 'Carregando' + '..'
            segundos--
            setTimeout(atualizarMensagem, 1000) // Chama novamente a cada segundo
          } else if (segundos == 0) {
            mensagem.style.display = 'none' // Esconde a mensagem quando terminar a contagem regressiva
            // Torna o iframe original visível novamente
            // Inicia a impressão
            novaJanela.print()
            novaJanela.close()
          }
        }

        // Inicie a contagem regressiva
        atualizarMensagem()
      } else {
        console.error('O iframe não foi encontrado.')
      }
    }
  }
}
</script>
