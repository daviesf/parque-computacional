<template>
  <div class="login-body">
    <form class="form_container">
      <div class="logo_container">
        <img src="../assets/media/logo.png" alt="" />
      </div>
      <div class="title_container">
        <p class="title">Olá!</p>
        <span class="subtitle"
          >Entre com sua conta da Unicamp para ter acesso aos serviços SAR.</span
        >
      </div>
      <div id="buttonDiv"></div>
      <p class="note" id="ajuda">Ajuda</p>
    </form>

    <div id="login-failed">
      <div id="login-failed-content">
        <div id="login-failed-header">
          <h2 class="login-failed-title">Erro de Login</h2>
          <button id="login-failed-close">&times;</button>
        </div>
        <p class="login-failed-description">
          Não foi possível efetuar o login. Verifique suas credenciais e tente novamente.
        </p>
      </div>
    </div>
    <div class="popup1" id="popup1">
      <div class="popup-content">
        <div class="popup-header">
          <h2>Ajuda?</h2>
        </div>
        <div class="popup-description">
          <p>
            Você deve entrar com a sua conta institucional <b>Unicamp</b> para ter acesso aos
            serviços SAR, como abrir chamados técnicos na plataforma HelpDesk.
          </p>
          <p>Em caso de problemas, contate um administrador.</p>
        </div>
        <button class="ok-button" id="ok-button">Ok</button>
      </div>
    </div>
  </div>
</template>

<script>
import jwt_decode from 'jwt-decode'
import axios from 'axios'
// import cryptojs from 'crypto-js'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  created() {
    this.$emit('hideNavbar', true) // Emitir o evento para ocultar a navbar
  },
  unmounted() {
    this.$emit('hideNavbar', false) // Emitir o evento para mostrar a navbar novamente
  },
  mounted() {
    function handleCredentialResponse(response) {
      const data = jwt_decode(response.credential)
      console.log(data)
      comparaAPI(data)
    }

    function comparaAPI(data) {
      const query = `
  query Query($email: String!) {
    confereLogin(email: $email) {
      idFuncionario
      status
      nome
      email
      tipo
      idGoogle
    }
  }
`

      const variables = {
        email: data.email
      }

      axios
        .post('http://localhost:4000', { query, variables })
        .then((response) => {
          console.log('comparando na API')
          const user = response.data.data.confereLogin
          if (user) {
            if (user.idGoogle == null || user.idGoogle == '') {
              primeiroLogin(user, data.sub)
            }
            registerSession(user, data)
          } else {
            console.log('Falha no login')
            document.getElementById('login-failed').style.display = 'block'
          }
        })
        .catch((error) => console.error(error))
    }

    function registerSession(user, data) {
      const query = `
  mutation UpdateIdSession($idFuncionario: ID!, $idSession: String!) {
    updateIdSession(idFuncionario: $idFuncionario, idSession: $idSession) {
      idFuncionario
      idSession
      nome
      idGoogle
      email
      tipo
    }
  }
  `

      const variables = {
        idFuncionario: user.idFuncionario,
        idSession: data.sub
      }

      axios
        .post('http://localhost:4000', { query, variables })
        .then((response) => {
          const updatedUser = response.data.data.updateIdSession
          document.cookie =
            'AKJA12=' +
            updatedUser.idSession +
            '; expires=' +
            new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toUTCString() +
            '; path=/'
          document.cookie =
            'GLG13=' +
            updatedUser.idGoogle +
            '; expires=' +
            new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toUTCString() +
            '; path=/'
          document.cookie =
            'identity=' +
            btoa(updatedUser.nome) +
            '; expires=' +
            new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toUTCString() +
            '; path=/'
          document.cookie =
            'identity2=' +
            btoa(updatedUser.email) +
            '; expires=' +
            new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toUTCString() +
            '; path=/'
            document.cookie =
            'identity3=' +
            btoa(updatedUser.idFuncionario) +
            '; expires=' +
            new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toUTCString() +
            '; path=/'

          if (updatedUser.tipo == 1) {
            window.location.href = '/'
          } else if (updatedUser.tipo == 2) {
            window.location.href = '/chamados'
          } else {
            console.log('Erro na verificação do tipo de usuário.')
          }
        })
        .catch((error) => console.error(error))
    }

    function primeiroLogin(user, googleid) {
      const query = `
        mutation UpdateIdGoogle($idFuncionario: ID!, $idGoogle: String!) {
          updateIdGoogle(idFuncionario: $idFuncionario, idGoogle: $idGoogle) {
            idFuncionario
            idGoogle
          }
        }`

      const variables = {
        idFuncionario: user.idFuncionario,
        idGoogle: googleid
      }

      axios
        .post('http://localhost:4000', { query, variables })
        .catch((error) => console.error(error))
    }

    google.accounts.id.initialize({
      client_id: 'YOUR_CLIENT_ID',
      callback: handleCredentialResponse
    })
    google.accounts.id.renderButton(
      document.getElementById('buttonDiv'),
      {
        theme: 'outline',
        size: 'large',
        type: 'standard',
        shape: 'pill',
        text: 'signin_with.',
        logo_alignment: 'center'
      } // customization attributes
    )

    document.getElementById('login-failed-close').addEventListener('click', function () {
      document.querySelector('#login-failed').style.transition = 'all 1s ease-in-out'
      document.querySelector('#login-failed').style.right = '-100%'
    })

    const popup = document.getElementById('popup1')
    const helpButton = document.getElementById('ajuda')
    document.getElementById('ok-button').addEventListener('click', hidePopup)

    helpButton.addEventListener('click', () => {
      popup.classList.add('visible')
      document.addEventListener('keydown', closePopupOnEscape)
      popup.addEventListener('click', closePopupOnClickOutside)
    })

    function hidePopup() {
      popup.classList.remove('visible')
      document.removeEventListener('keydown', closePopupOnEscape)
      popup.removeEventListener('click', closePopupOnClickOutside)
    }

    function closePopupOnEscape(event) {
      if (event.key === 'Escape') {
        hidePopup()
      }
    }

    function closePopupOnClickOutside(event) {
      if (event.target === popup) {
        hidePopup()
      }
    }
  }
}
</script>

<style src="../assets/login.css"></style>
