const knex = require("../../../mysql");

export default {
	Query: {
		bancadas: async () => {
			return knex("bancadas").select("*");
		},

		bancada: async (_, { idBancada }) => {
			const bancada = await knex("bancadas")
				.where("idBancada", idBancada)
				.first();
			return bancada;
		},
		bancadasByLocal: async (_, { local }) => {
			const bancadas = await knex("bancadas").where("local", local);
			return bancadas;
		},
		bancadasByStatus: async (_, { status }) => {
			const bancadas = await knex("bancadas").where("status", status);
			return bancadas;
		},
		searchBancadas: async (_, { filter }) => {
			const bancadas = await knex("bancadas").where((builder) => {
				if (filter.idBancada) {
					builder.where("idBancada", filter.idBancada);
				}
				if (filter.local) {
					builder.where("local", "like", `%${filter.local}%`);
				}
				if (filter.apelido) {
					builder.where("apelido", "like", `%${filter.apelido}%`);
				}
				if (filter.status) {
					builder.where("status", filter.status);
				}

			});
			return bancadas;
		},

		totalBancadasOp: async () => {
			const [count] = await knex("bancadas").count("* as total").where("status", "=", "1");
			return count.total;
		},

	},

	Mutation: {
		createBancada: async (_, { data }) => {
			const [id] = await knex("bancadas").insert(data);
			const novaBancada = await knex("bancadas").where("idBancada", id).first();
			return novaBancada;
		},
		updateBancada: async (_, { idBancada, data }) => {
			const bancadaAtualizada = await knex("bancadas")
				.where("idBancada", idBancada)
				.update(data);
			const bancada = await knex("bancadas")
				.where("idBancada", idBancada)
				.first();
			return bancada;
		},
		deleteBancada: async (_, { idBancada }) => {
			await knex("bancadas").where("idBancada", idBancada).del();
			return true;
		},
		ativarBancada: async (_, { idBancada, status }) => {
			await knex("bancadas").where("idBancada", idBancada).update({ status });
			const bancada = await knex("bancadas")
				.where("idBancada", idBancada)
				.first();
			return bancada;
		},
	},
};
