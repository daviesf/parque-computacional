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
    }
  }
`

  const variables = {
    email: data.email
  }

  axios
    .post('http://localhost:4000', { query, variables })
    .then((response) => {
      const user = response.data.data.confereLogin
      if (user) {
        console.log('Login verificado com sucesso')
        registerSession(user, data)
        if (user.tipo == 0) {
          console.log('eu sou adm')
          // window.location.replace("home adm");
        } else if (user.tipo == 1) {
          console.log('eu sou usuário comum')
          // window.location.replace("página user comum")
        } else {
          console.log('Erro na verificação do tipo.')
        }
        // window.location.replace("/public/home.html")
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
      if (updatedUser) {
        const isSecure = window.location.protocol === 'https:'
        document.cookie = `AKJA12=${updatedUser.idSession}; expires=${new Date(
          Date.now() + 172800000
        ).toUTCString()}; path=/`

        console.log('Sessão registrada')
        console.log(document.cookie)
      } else {
        console.log('Falha no registro da sessão')
      }
    })
    .catch((error) => console.error(error))
}

window.onload = function () {
  google.accounts.id.initialize({
    client_id: '1090697719532-djuhtf5mi9r69ci55jr16ib9hg9ssnbc.apps.googleusercontent.com',
    callback: handleCredentialResponse
  })
  google.accounts.id.renderButton(
    document.getElementById('buttonDiv'),
    {
      theme: 'outline',
      size: 'large',
      width: '230',
      type: 'standard',
      shape: 'pill',
      text: 'signin_with.',
      logo_alignment: 'center'
    } // customization attributes
  )
}

window.addEventListener('load', function () {
  document.getElementById('login-failed-close').addEventListener('click', function () {
    document.querySelector('#login-failed').style.transition = 'all 1s ease-in-out';
    document.querySelector('#login-failed').style.right = '-100%';
  });

const popup = document.getElementById('popup1')
const helpButton = document.getElementById('ajuda')
document.getElementById('ok-button').addEventListener('click', hidePopup);

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

});
