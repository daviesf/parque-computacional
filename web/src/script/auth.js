import axios from 'axios';

export async function authenticator() {
  var cookie = document.cookie;
  var cookieValue = cookie.replace(/(?:(?:^|.*;\s*)GLG13\s*\=\s*([^;]*).*$)|^.*$/, '$1');
  console.log(cookieValue);
  const query = `
          query Query {
              authenticator(idGoogle: "${cookieValue}")
          }
      `;

  try {
    const response = await axios.post('http://localhost:4000', { query });
    return response.data.data.authenticator;
  } catch (error) {
    console.error(error);
    return false;
  }
}
