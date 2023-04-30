const { OAuth2Client } = require('google-auth-library');
const CLIENT_ID = '1090697719532-djuhtf5mi9r69ci55jr16ib9hg9ssnbc.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var email = profile.getEmail();
    console.log(profile.getEmail());
    verificarLogin(email);
}

async function verificarLogin(email) {
    const query = `
      query confereLogin($usuario: String!) {
        confereLogin(login: { usuario: $usuario }) {
          nome
        }
      }
    `;
  
    const variables = { usuario: email };
  
    const response = await fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    });
  
    const { data, errors } = await response.json();
  
    if (errors) {
      console.log("404");
      return;
    }
  
    console.log("ok 200");
}