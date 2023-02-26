const knex = require('../../../mysql');

export default {
    Query: {
        chamado: async () => {
            return knex('chamados').select('*');
        },

        chamados: async (_, { idChamado }) => {
            const chamado = await knex('chamados').where('idChamado', idChamado).first();
            return chamado;
        }
    },

    Mutation: {
        createChamado: async (_, { data }) => {
            const [id] = await knex('chamados').insert(data);
            const novoChamado = await knex('chamados').where('idChamado', id).first();
            return novoChamado;
        },
        updateChamado: async (_, { idChamado, data }) => {
            const chamadoAtualizado = await knex('chamados').where('idChamado', idChamado).update(data);
            const chamado = await knex('chamados').where('idChamado', idChamado).first();
            return chamado;
        },
        deleteChamado: async (_, { idChamado }) => {
            await knex('chamados').where('idChamado', idChamado).del();
            return true;
        }
    }
};