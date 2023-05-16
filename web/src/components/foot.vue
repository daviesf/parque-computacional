<template>
  <div>
    <!-- Conteúdo principal da página -->

    <footer class="rodape rodape-segment">
      <div class="ui inverted vertical footer segment rodape-segment">
        <div class="ui container">
          <div class="ui stackable inverted divided equal height stackable grid">
            <div class="sixteen wide column">
              <p class="ui inverted center aligned segment rodape-segment">
                Secretaria de Administração Regional - Limeira (SP) | 2023 © Todos os direitos reservados <br />
                Desenvolvido por Davie, Júnior, Neto e Samuel
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Rodape'
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
}

.rodape {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-top: 10px;
  z-index: -9999; /* Valor do z-index para garantir sobreposição */
}

.rodape-segment {
  background: #11101d !important; 
}
</style>
