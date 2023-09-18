const knex = require('../DATA/DataKnex')

const seclet =((req)=>{
    return knex.select(req.query.filter).from('phone')
})
const insert =((req)=>{
    return knex('phone').insert(req.body)
})
const updete = ((req)=>{
    return knex('phone').where({ id:req.params.id }).updete(req.body)
})
const remove = ((req)=>{
    return knex('phone').where({ id:req.params.id }).delete()
})
module.exports = {seclet ,insert ,updete ,remove }
// 1-8 สไตล์การเขียน ดูแอรโลฟังชั่น



