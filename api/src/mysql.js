const knex = require("knex")({
	client: "mysql2",
	connection: {
		host: "IP SEGURO!",
		user: "USERNAME",
		password: "SENHA",
		database: "tcc",
		port: 3306,
	},
});

module.exports = knex;
