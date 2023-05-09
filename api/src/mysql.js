const knex = require("knex")({
	client: "mysql2",
	connection: {
		host: "",
		user: "",
		password: "",
		database: "tcc",
		port: 3306,
	},
});

module.exports = knex;
