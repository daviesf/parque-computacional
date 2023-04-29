const knex = require("../../../mysql");

export default {
  Query: {
    patrimonios: async () => {
      return await knex("patrimonios").select("*");
    },
    patrimonio: async (_, { idPatrimonio }) => {
      const patrimonio = await knex("patrimonios")
        .where("idPatrimonio", idPatrimonio)
        .first();
      return patrimonio;
    },
    patrimoniosByTipo: async (_, { tipo }) => {
      const patrimonios = await knex("patrimonios").where("tipo", tipo);
      return patrimonios;
    },
    patrimoniosByStatus: async (_, { status }) => {
      const patrimonios = await knex("patrimonios").where("status", status);
      return patrimonios;
    },
    patrimoniosByBancada: async (_, { idBancada }) => {
      const patrimonios = await knex("patrimonios").where(
        "idBancada",
        idBancada
      );
      return patrimonios;
    },
    patrimoniosByMarcaModelo: async (_, { marca, modelo }) => {
      const patrimonios = await knex("patrimonios")
        .where("marca", marca)
        .orWhere("modelo", modelo);
      return patrimonios;
    },
    searchPatrimonios: async (_, { filter }) => {
      const patrimonios = await knex("patrimonios")
        .where((builder) => {
          if (filter.marca) {
            builder.where("marca", "like", `%${filter.marca}%`);
          }
          if (filter.modelo) {
            builder.where("modelo", "like", `%${filter.modelo}%`);
          }
          if (filter.status) {
            builder.where("status", filter.status);
          }
          if (filter.idBancada) {
            builder.where("idBancada", filter.idBancada);
          }
          if (filter.tipo) {
            builder.where("tipo", "like", `%${filter.tipo}%`);
          }
          if (filter.processador) {
            builder.where("processador", "like", `%${filter.processador}%`);
          }
          if (filter.memROM) {
            builder.where("memROM", "like", `%${filter.memROM}%`);
          }
          if (filter.memRAM) {
            builder.where("memRAM", "like", `%${filter.memRAM}%`);
          }
        });
      return patrimonios;
    }
  },

  Mutation: {
    createPatrimonio: async (_, { data }) => {
      const [id] = await knex("patrimonios").insert(data);
      const novoPatrimonio = await knex("patrimonios")
        .where("idPatrimonio", id)
        .first();
      return novoPatrimonio;
    },
    updatePatrimonio: async (_, { idPatrimonio, data }) => {
      const patrimonioAtualizado = await knex("patrimonios")
        .where("idPatrimonio", idPatrimonio)
        .update(data);
      const patrimonio = await knex("patrimonios")
        .where("idPatrimonio", idPatrimonio)
        .first();
      return patrimonio;
    },
    deletePatrimonio: async (_, { idPatrimonio }) => {
      await knex("patrimonios").where("idPatrimonio", idPatrimonio).del();
      return true;
    },
  },
};
