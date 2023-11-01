import axios from 'axios'

export function nomeFuncionario(value) {
  return new Promise((resolve, reject) => {
    const query = `
    query Query($idFuncionario: ID!) {
      funcionario(idFuncionario: $idFuncionario) {
        nome
      }
    }`

    const variables = {
      idFuncionario: value
    }

    axios.post('http://localhost:4000', { query, variables }).then(
      (result) => {
        const nome = result.data.data.funcionario.nome
        console.log(nome)
        resolve(nome)
      },
      (error) => {
        console.log(error)
        reject(error)
      }
    )
  })
}
