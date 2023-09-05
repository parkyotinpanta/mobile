const knex = require('../DATA/DataKnex')
// const รับค่า มาจากดาต้าเบส 

module.exports = {
    select: async (req, res) => {
        const MyphoneRaed = await knex.select().from('phone')
        res.send(MyphoneRaed)

    },
    insert: async (req, res) => {
        const MyphoneInsert = await knex('phone').insert(req.body)
        res.send(MyphoneInsert)

    },
    updete: async (req, res) => {
        const id = req.params.id
        const MyphoneUpdete = await knex('phone').where({ id }).updete(req.body)
        res.send({ MyphoneUpdete })

    },
    delete: async (req, res) => {
        const id = req.params.id
        const Myphonedelete = await knex('phone').where({ id }).delete()
        res.send({ Myphonedelete })

    },


}



