const knex = require('../../../mysql');

export default {
    Query: {
        chamados: async () => {
            return knex('chamados').select('*');
        },

        chamado: async (_, { idChamado }) => {
            const chamado = await knex('chamados').where('idChamado', idChamado).first();
            return chamado;
        },
        chamadosStatus: async (_, { status }) => {
            const chamados = await knex('chamados').where('status', status);
            return chamados;
        },
        chamadosBancada: async (_, { idBancada }) => {
            const chamados = await knex('chamados').where('idBancada', idBancada);
            return chamados;
        },
        chamadosFuncionario: async (_, { idFuncionario }) => {
            const chamados = await knex('chamados').where('idFuncionario', idFuncionario);
            return chamados;
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