require("dotenv").config();

const knex = require("knex")({
	client: "mysql2",
	connection: {
		host: "SEU IP",
		user: "SEU USER",
		password: "SENHA DO USER",
		database: "BANCO",
		port: "PORTA - GERALMENTE 3306",
	},
});

module.exports = knex;
