function main() {
	const query = `
    query {
      funcionarios {
        nome
        senha
        }
    }
  `;

	requestApi(query).then(res => console.log(res));
}

async function requestApi(query) {
	const response = await fetch("http://localhost:4000/graphql", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ query }),
	});

	const { data, errors } = await response.json();

	if (errors) {
		throw new Error(errors[0].message);
	}

	return data;
}

main();