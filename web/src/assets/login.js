function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential);
  comparaAPI(data);
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
`;

  const variables = {
    email: data.email,
  };

  axios.post('http://localhost:4000', { query, variables })
    .then(response => {
      const user = response.data.data.confereLogin;
      if (user) {
        console.log('Login verificado com sucesso');
        registerSession(user, data);
      } else {
        console.log('Falha no login');
        document.getElementById("login-failed").style.display = "block";
      }
    })
    .catch(error => console.error(error));
}

function registerSession(user, data) {
  const query = `
  mutation UpdateIdSession($idFuncionario: ID!, $idSession: String!) {
    updateIdSession(idFuncionario: $idFuncionario, idSession: $idSession) {
      idFuncionario
      idSession
    }
  }
  `;

  const variables = {
    idFuncionario: user.idFuncionario,
    idSession: data.sub,
  };

  axios.post('http://localhost:4000', { query, variables })
    .then(response => {
      const updatedUser = response.data.data.updateIdSession;
      if (updatedUser) {
        document.cookie = `idSession=${updatedUser.idSession}; expires=${new Date(Date.now() + 172800000).toUTCString()}; path=/`;
        console.log('Sessão registrada');
        console.log(document.cookie);
      } else {
        console.log('Falha no registro da sessão');
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

const popup = document.getElementById("popup");

function showPopup() {
  popup.classList.add("visible");
  document.addEventListener("keydown", closePopupOnEscape);
  popup.addEventListener("click", closePopupOnClickOutside);
}

function hidePopup() {
  popup.classList.remove("visible");
  document.removeEventListener("keydown", closePopupOnEscape);
  popup.removeEventListener("click", closePopupOnClickOutside);
}

function closePopupOnEscape(event) {
  if (event.key === "Escape") {
    hidePopup();
  }
}

function closePopupOnClickOutside(event) {
  if (event.target === popup) {
    hidePopup();
  }
}

