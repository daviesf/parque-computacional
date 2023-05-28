const jwt = require('jsonwebtoken');

const sessionId = getCookieValue('AKJA12');

function generateToken(sessionId) {
  const secret = 'Lj/T2#SiiK2@sh!';

  // Define as informações a serem incluídas no token (no caso, apenas o ID da sessão)
  const payload = {
    sessionId: sessionId
  };

  // Gera o token JWT com base nas informações e na senha secreta
  const token = jwt.sign(payload, secret);

  // Retorna o token gerado
  return token;
}

// Função auxiliar para ler o valor de um cookie
function getCookieValue(name) {
  const cookies = document.cookie.split('; ');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=');
    if (cookie[0] === name) {
      return cookie[1];
    }
  }

  return null;
}

// Chama a função para gerar o token
const token = generateToken(sessionId);

console.log(token); // Imprime o token gerado no console (apenas para fins de exemplo)
