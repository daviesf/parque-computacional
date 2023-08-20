const knex = require("../../../mysql");
export default {
	Query: {
		consertos: async () => {
			return knex("consertos").select("*");
		},
		conserto: async (_, { idConserto }) => {
			const conserto = await knex("consertos")
				.where("idConserto", idConserto)
				.first();
			return conserto;
		},
		consertosByPatrimonio: async (_, { idPatrimonio }) => {
			const consertos = await knex("consertos").where(
				"idPatrimonio",
				idPatrimonio
			);
			return consertos;
		},
		searchConsertos: async (_, { filter }) => {
			const consertos = await knex("consertos").where((builder) => {
				if (filter.idConserto) {
					builder.where("idConserto", filter.idConserto);
				}
				if (filter.idPatrimonio) {
					builder.where("idPatrimonio", filter.idPatrimonio);
				}
				if (filter.idFuncionario) {
					builder.where("idFuncionario", filter.idFuncionario);
				}
				if (filter.dataHora) {
					builder.where("dataHora", "like", `%${filter.dataHora}%`);
				}
			});
			return consertos;
		},
	},

	Mutation: {
		createConserto: async (_, { data }) => {
			const [id] = await knex("consertos").insert(data);
			const novoConserto = await knex("consertos")
				.where("idConserto", id)
				.first();
			return novoConserto;
		},
		updateConserto: async (_, { idConserto, data }) => {
			const consertoAtualizado = await knex("consertos")
				.where("idConserto", idConserto)
				.update(data);
			const conserto = await knex("consertos")
				.where("idConserto", idConserto)
				.first();
			return conserto;
		},
		deleteConserto: async (_, { idConserto }) => {
			await knex("consertos").where("idConserto", idConserto).del();
			return true;
		},
	},
};
