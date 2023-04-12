const knex = require("../../../mysql");

export default {
  Query: {
    patrimonios: async () => {
      return await knex("patrimonio").select("*");
    },
    patrimonio: async (_, { idPatrimonio }) => {
      const patrimonio = await knex("patrimonio")
        .where("idPatrimonio", idPatrimonio)
        .first();
      return patrimonio;
    },
    patrimoniosByTipo: async (_, { tipo }) => {
      const patrimonios = await knex("patrimonio").where("tipo", tipo);
      return patrimonios;
    },
    patrimoniosByStatus: async (_, { status }) => {
      const patrimonios = await knex("patrimonio").where("status", status);
      return patrimonios;
    },
    patrimoniosByBancada: async (_, { idBancada }) => {
      const patrimonios = await knex("patrimonio").where(
        "idBancada",
        idBancada
      );
      return patrimonios;
    },
    patrimoniosByMarcaModelo: async (_, { marca, modelo }) => {
      const patrimonios = await knex("patrimonio")
        .where("marca", marca)
        .orWhere("modelo", modelo);
      return patrimonios;
    },
  },

  Mutation: {
    createPatrimonio: async (_, { data }) => {
      const [id] = await knex("patrimonio").insert(data);
      const novoPatrimonio = await knex("patrimonio")
        .where("idPatrimonio", id)
        .first();
      return novoPatrimonio;
    },
    updatePatrimonio: async (_, { idPatrimonio, data }) => {
      const patrimonioAtualizado = await knex("patrimonio")
        .where("idPatrimonio", idPatrimonio)
        .update(data);
      const patrimonio = await knex("patrimonio")
        .where("idPatrimonio", idPatrimonio)
        .first();
      return patrimonio;
    },
    deletePatrimonio: async (_, { idPatrimonio }) => {
      await knex("patrimonio").where("idPatrimonio", idPatrimonio).del();
      return true;
    },
  },
};
