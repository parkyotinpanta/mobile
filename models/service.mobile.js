const knex = require('../DATA/DataKnex')

module.exports = {
    select: (req) => knex.select(req.query.filter).from('phone'),
    insert: (req) => knex('phone').insert(req.body),
    updete: (req) => knex('phone').where({ id:req.params.id }).updete(req.body),
    delete: (req) => knex('phone').where({ id:req.params.id }).delete()
     }






