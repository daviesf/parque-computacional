const knex = require("knex")({
	client: "mysql2",
	connection: {
		host: "152.67.40.125",
		user: "samuel",
		password: "Juninhodopneu12!",
		database: "tcc",
		port: 3306,
	},
});

module.exports = knex;
