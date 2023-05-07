const cookie = document.cookie.split('; ').find(row => row.startsWith('AKJA12')).split('=')[1];
console.log(cookie)
if (cookie) {
    console.log("Cookie encontrado, verificando sessão")
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
            console.log("Resposta da API");
            const user = response.data.data.confereSession
            if (user) {
                console.log('Sessão verificada com sucesso')
                window.location.replace("/public/home.html");
            } else {
                if (!window.location.href.endsWith('/login.html')) {
                    window.location.replace("/public/login.html");
                }
            }
        })
        .catch((error) => console.error(error))
} else {
    console.log("Cookie não encontrado")
}