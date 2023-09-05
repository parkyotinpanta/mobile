const knex = require('../DATA/DataKnex')
const service = require('../models/service.mobile')
const createError = require('http-errors')



module.exports = {
    select: async (req, res, next) => {
        try {
            const MyphoneRaed = await service.select(req)
            res.send(MyphoneRaed)
        } catch (error) {
            console.log(error)
            next(createError.InternalServerError())
        }
    },
    insert: async (req, res, next) => {
        try {
            const MyphoneInsert = await service.insert(req)
            res.send(MyphoneInsert)
        } catch {
            console.log(error)
            next(createError.InternalServerError)
        }
    },
    updete: async (req, res, next) => {
        try {
            const MyphoneUpdete = await service.updete(req)
            res.send({ MyphoneUpdete })
        } catch {
            console.log(error)
            next(createError.InternalServerError)
        }
    },
    delete: async (req, res, next) => {
        try {
            const Myphonedelete = await service.delete(req)
            res.send({ Myphonedelete })
        } catch {
            console.log(error)
            next(createError.InternalServerError)
        }
    },


}



