require("dotenv").config();

const knex = require("knex")({
	client: "mysql2",
	connection: {
		host: "152.67.40.125",
		user: "samuel",
		password: "Samuel2022!",
		database: "tcc",
		port: "3306",
	},
});

module.exports = knex;
