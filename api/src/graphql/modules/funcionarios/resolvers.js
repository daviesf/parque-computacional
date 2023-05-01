const knex = require("../../../mysql");
const CryptoJS = require('crypto-js');

function generatePassword(length) {
	const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
	let password = "";
	for (let i = 0; i < length; i++) {
		password += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return password;
}

export default {
	Query: {
		// Resolva as querys do arquivo schema.gql
		funcionarios: async () => {
			return knex("funcionarios").select("*");
		},
		funcionario: async (_, { idFuncionario }) => {
			const funcionario = await knex("funcionarios")
				.where("idFuncionario", idFuncionario)
				.first();
			return funcionario;
		},
		funcionariosByNome: async (_, { nome }) => {
			const funcionarios = await knex("funcionarios").where("nome", nome);
			return funcionarios;
		},
		funcionariosByStatus: async (_, { status }) => {
			const funcionarios = await knex("funcionarios").where("status", status);
			return funcionarios;
		},
		searchFuncionarios: async (_, { filter }) => {
			const funcionarios = await knex("funcionarios").where((builder) => {
				if (filter.nome) {
					builder.where("nome", "like", `%${filter.nome}%`);
				}
				if (filter.status) {
					builder.where("status", filter.status);
				}
			});
			return funcionarios;
		},
		confereLogin: async (_, { email }) => {
			const funcionario = await knex("funcionarios").where("email", email).first();
			return funcionario;
		},
	},

	Mutation: {
		createFuncionario: async (_, { data }) => {
			const [id] = await knex("funcionarios").insert(data);
			const novoFuncionario = await knex("funcionarios")
				.where("idFuncionario", id)
				.first();
			return novoFuncionario;
		},

		updateFuncionario: async (_, { idFuncionario, data }) => {
			const funcionarioAtualizado = await knex("funcionarios")
				.where("idFuncionario", idFuncionario)
				.update(data);
			const funcionario = await knex("funcionarios")
				.where("idFuncionario", idFuncionario)
				.first();
			return funcionario;
		},

		updateIdSession: async (_, { idFuncionario, idSession }) => {
			const newIdSession = CryptoJS.MD5(idSession + Date.now() + generatePassword(15)).toString();
			const funcionarioAtualizado = await knex("funcionarios")
				.where("idFuncionario", idFuncionario)
				.update({ idSession: newIdSession });
			const funcionario = await knex("funcionarios")
				.where("idFuncionario", idFuncionario)
				.first();
			return funcionario;
		},


		deleteFuncionario: async (_, { idFuncionario }) => {
			await knex("funcionarios").where("idFuncionario", idFuncionario).del();
			return true;
		},
	},
};
