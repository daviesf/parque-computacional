const knex = require('../../../startMYSQLServer');
export default {
    
    Query:{
        bancada: async () => {
            return knex('bancadas').select('*');
        },

        bancadas: async (_, {idBancada}) => {
            const bancada = await Bancada.findById(idBancada);
            return bancada;
        },
    },
  
    Mutation: {
      createBancada: async (_, { data }) => {
        const [id] = await knex('bancadas').insert(data);
        const novaBancada = await knex('bancadas').where('idBancada', id).first();
        return novaBancada;
      },
      updateBancada: async (_, { idBancada, data }) => {
        const bancadaAtualizada = await knex('bancadas').where('idBancada', idBancada).update(data).returning('*');
        return bancadaAtualizada;
      },
      deleteBancada: async (_, { idBancada }) => {
        await knex('bancadas').where('idBancada', idBancada).del();
        return true;
      },
    },
  };