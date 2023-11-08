const knex = require("../../../mysql");
const CryptoJS = require("crypto-js");
const authKey = "a1b2c3d4e5f6g7h8i9j0";

function generatePassword(length) {
	const chars =
		"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
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
		totalFuncionarios: async () => {
			const [count] = await knex("funcionarios").count("* as total");
			return count.total;
		},
		searchFuncionarios: async (_, { filter }) => {
			const funcionarios = await knex("funcionarios").where((builder) => {
				if (filter.nome) {
					builder.where("nome", "like", `%${filter.nome}%`);
				}
				if (filter.email) {
					builder.where("email", "like", `%${filter.email}%`);
				}
				if (filter.status) {
					builder.where("status", filter.status);
				}
				if (filter.tipo) {
					builder.where("tipo", filter.tipo);
				}
				if (filter.idFuncionario) {
					builder.where("idFuncionario", filter.idFuncionario);
				}
			});
			return funcionarios;
		},
		confereLogin: async (_, { email }) => {
			const funcionario = await knex("funcionarios")
				.where("email", email)
				.first();
			return funcionario;
		},
		confereSession: async (_, { idSession }) => {
			const funcionario = await knex("funcionarios")
				.where("idSession", idSession)
				.first();
			return funcionario;
		},
		authenticator: async (_, { idGoogle }) => {
			const funcionario = await knex("funcionarios")
				.where("idGoogle", idGoogle)
				.first();
			return !!funcionario;
		},
	},

	Mutation: {
		createFuncionario: async (_, { data }) => {
			const novoFuncionario = await knex("funcionarios").insert(data);
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
			const newIdSession = CryptoJS.SHA256(
				idSession + Date.now() + generatePassword(15)
			).toString();
			const funcionarioAtualizado = await knex("funcionarios")
				.where("idFuncionario", idFuncionario)
				.update({ idSession: newIdSession });
			const funcionario = await knex("funcionarios")
				.where("idFuncionario", idFuncionario)
				.first();
			return funcionario;
		},

		updateIdGoogle: async (_, { idFuncionario, idGoogle }) => {
			const newIdGoogle = idGoogle;
			const funcionarioAtualizado = await knex("funcionarios")
				.where("idFuncionario", idFuncionario)
				.update({ idGoogle: CryptoJS.SHA256(newIdGoogle).toString() });
			const funcionario = await knex("funcionarios")
				.where("idFuncionario", idFuncionario)
				.first();
			return funcionario;
		},

		deleteFuncionario: async (_, { idFuncionario }) => {
			await knex("funcionarios").where("idFuncionario", idFuncionario).del();
			return true;
		},

		ativarFuncionario: async (_, { idFuncionario, status }) => {
			await knex("funcionarios")
				.where("idFuncionario", idFuncionario)
				.update({ status });
			const funcionario = await knex("Funcionarios")
				.where("idFuncionario", idFuncionario)
				.first();
			return funcionario;
		},
	},
};
