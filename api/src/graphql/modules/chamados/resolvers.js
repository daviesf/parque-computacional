const knex = require("../../../mysql");

export default {
	Query: {
		chamados: async () => {
			return knex("chamados").select("*");
		},

		chamado: async (_, { idChamado }) => {
			const chamado = await knex("chamados")
				.where("idChamado", idChamado)
				.first();
			return chamado;
		},
		chamadosStatus: async (_, { status }) => {
			const chamados = await knex("chamados").where("status", status);
			return chamados;
		},
		chamadosBancada: async (_, { idBancada }) => {
			const chamados = await knex("chamados").where("idBancada", idBancada);
			return chamados;
		},
		chamadosFuncionario: async (_, { idFuncionario }) => {
			const chamados = await knex("chamados").where(
				"idFuncionario",
				idFuncionario
			);
			return chamados;
		},
		searchChamados: async (_, { filter }) => {
			const chamados = await knex("chamados").where((builder) => {
				if (filter.idBancada) {
					builder.where("idBancada", filter.idBancada);
				}
				if (filter.idFuncionario) {
					builder.where("idFuncionario", filter.idFuncionario);
				}
				if (filter.status) {
					builder.where("status", filter.status);
				}
				if (filter.detalhes) {
					builder.where("detalhes", "like", `%${filter.detalhes}%`);
				}
			});
			return chamados;
		},
		totalChamadosPendentes: async () => {
			const [count] = await knex("chamados").count("* as total").where("status", 0);
			return count.total;
		  },
	},

	Mutation: {
		createChamado: async (_, { data }) => {
			const [id] = await knex("chamados").insert(data);
			const novoChamado = await knex("chamados").where("idChamado", id).first();
			return novoChamado;
		},
		updateChamado: async (_, { idChamado, data }) => {
			const chamadoAtualizado = await knex("chamados")
				.where("idChamado", idChamado)
				.update(data);
			const chamado = await knex("chamados")
				.where("idChamado", idChamado)
				.first();
			return chamado;
		},
		deleteChamado: async (_, { idChamado }) => {
			await knex("chamados").where("idChamado", idChamado).del();
			return true;
		},
		resolverChamada: async (_, {idChamado, status}) => {
			await knex("chamados").where("idChamado", idChamado).update("status", status);
			return status;
		}
	},
};
