<template>
  <div class="ui active inverted dimmer" id="bkg">
    <div class="ui text loader" id="logoutp">Efetuando log-out</div>
    <div id="counter"></div>
  </div>
</template>

<script>
export default {
  name: 'Logout',
  beforeUnmount() {
    this.$emit('hideNavbar', false) // Emitir o evento para mostrar a navbar novamente
  },
  mounted() {
    function theme() {
      const theme = document.cookie.replace(/(?:(?:^|.*;\s*)theme\s*=\s*([^;]*).*$)|^.*$/, "$1");
      const app1 = document.querySelector('#bkg')
      const app2 = document.querySelector('#logoutp')
      const app3 = document.querySelector('#counter')
      if (theme) {
          if (theme == 'dark') {
              app1.classList.add('dark-mode')
              app2.classList.add('dark-mode')
              app3.classList.add('dark-mode')

          } else if (theme == 'light') {
              app1.classList.remove('dark-mode')
              app2.classList.remove('dark-mode')
              app3.classList.remove('dark-mode')
          }
      }
    }

    theme()
    this.$emit('hideNavbar', true) // Emitir o evento para ocultar a navbar
    const cookies = document.cookie.split(';')
    localStorage.removeItem('name')

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i]
      const eqPos = cookie.indexOf('=')
      const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`
    }

    const counter = document.getElementById('counter')
    let seconds = 3

    const countdownInterval = setInterval(() => {
      if (seconds === 1) {
        counter.innerHTML = `Redirecionando para a tela de login em ${seconds} segundo...`
      } else {
        counter.innerHTML = `Redirecionando para a tela de login em ${seconds} segundos...`
      }
      seconds--

      if (seconds < 0) {
        clearInterval(countdownInterval)
        this.$router.push('/login')
      }
    }, 1000)
  }
}
</script>

<style>
#counter {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
