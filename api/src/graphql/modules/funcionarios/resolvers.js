const knex = require("../../../mysql");

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

    deleteFuncionario: async (_, { idFuncionario }) => {
      await knex("funcionarios").where("idFuncionario", idFuncionario).del();
      return true;
    },
  },
};
