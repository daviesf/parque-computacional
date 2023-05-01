function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential);
  console.log(data);
  console.log("====================================")
  comparaAPI(data);
}

function comparaAPI(data) {
  const query = `
  query Query($usuario: String!) {
    confereLogin(usuario: $usuario) {
      idFuncionario
      status
      nome
      usuario
      tipo
    }
  }
`;

  const variables = {
    usuario: data.email,
  };

  axios.post('http://localhost:4000', { query, variables })
    .then(response => {
      const user = response.data.data.confereLogin;

      if (user) {
        window.location.replace('/public/home.html');
      } else {
        console.log('Falha no login');
        document.getElementById("login-failed").style.display = "block";
      }
    })
    .catch(error => console.error(error));
}

window.onload = function () {
  google.accounts.id.initialize({
    client_id: "1090697719532-djuhtf5mi9r69ci55jr16ib9hg9ssnbc.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    {
      theme: "outline",
      size: "large",
      width: "230",
      type: "standard",
      shape: "pill",
      theme: "outline",
      text: "signin_with.",
      size: "large",
      logo_alignment: "center",
      width: "230"
    }  // customization attributes
  );

}

document.getElementById('login-failed-close').onclick = function () {
  document.querySelector('#login-failed').style.transition = 'all 1s ease-in-out';
  document.querySelector('#login-failed').style.right = '-100%';
}