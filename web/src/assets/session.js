import axios from 'axios'

const cookie = document.cookie
  .split('; ')
  .find((row) => row.startsWith('AKJA12'))
  .split('=')[1]
console.log(cookie)
if (cookie) {
  console.log('Cookie encontrado, verificando sessão')
  const query = `
    query Query($idSession: String!) {
      confereSession(idSession: $idSession) {
        idFuncionario
        status
        nome
        tipo
      }
    }
    `
  const variables = {
    idSession: cookie
  }

  axios
    .post('http://localhost:4000', { query, variables })
    .then((response) => {
      console.log('Resposta da API')
      const user = response.data.data.confereSession
      if (!window.localStorage.getItem('user') == user) {
        window.localStorage.setItem('user', JSON.stringify(user))
      } else {
        console.log('Usuário já está no localStorage')
      }

      if (user) {
        console.log('Sessão verificada com sucesso')
        if (user.tipo == 1) {
          console.log('Administrador')
          window.location.href = '/'
        } else if (user.tipo == 0) {
          console.log('Usuário comum')
          window.location.href = '/helpdeskuser'
        } else {
          console.log('Erro na verificação do tipo.')
        }
      } else {
        if (!window.location.href.endsWith('/login.html')) {
          window.location.replace('/public/login.html')
        }
      }
    })
    .catch((error) => console.error(error))
} else {
  console.log('Cookie não encontrado')
}
