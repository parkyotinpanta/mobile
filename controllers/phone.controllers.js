const knex = require('../DATA/DataKnex')
// const รับค่า มาจากดาต้าเบส 

module.exports = {
    select: async (req, res) => {
        const MyphoneRaed = await knex.select().from('phone')
        res.send( MyphoneRaed )

    },
    insert: async (req, res) => {
        const MyphoneInsert = await knex('phone').insert(req.body)
        res.send( MyphoneInsert )

    },
    updete: async (req, res) => {
        const name = req.params.name
        const MyphoneUpdete = await knex('phone').where({name}).updete(req.body)
        res.send( {MyphoneUpdete} )

    },


}



