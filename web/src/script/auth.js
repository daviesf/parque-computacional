function authenticator() {
    var cookie = document.cookie;
    var cookieValue = cookie.replace(/(?:(?:^|.*;\s*)SUBG\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const query = `
        query Query {
            authenticator(idGoogle: "${cookieValue}")
        }
    `;
    axios.post("http://localhost:4000", { query }).then((result) => {
        !!result.data.data.authenticator;
    });
}