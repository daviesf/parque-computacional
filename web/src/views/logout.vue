<template>
  <div class="ui active inverted dimmer">
    <div class="ui text loader">Efetuando log-out</div>
    <div class="" id="counter"></div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Logout',
  created() {
    this.$emit('hideNavbar', true) // Emitir o evento para ocultar a navbar
    this.$emit('hideFooter', true)
  },
  destroyed() {
    this.$emit('hideNavbar', false) // Emitir o evento para mostrar a navbar novamente
    this.$emit('hideFooter', false)
  },
  mounted() {
    const cookies = document.cookie.split(';')
    let foundAKJA12 = false
    localStorage.removeItem('name');

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i]
      const eqPos = cookie.indexOf('=')
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie

      if (name.trim() === 'AKJA12') {
        foundAKJA12 = true
        break
      }
    }

    if (!foundAKJA12) {
      this.$router.push('/login')
    } else {
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i]
        const eqPos = cookie.indexOf('=')
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
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