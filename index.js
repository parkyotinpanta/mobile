const express = require('express')
const app = express()
const createError = require('http-errors')
const indexRouter = require('./Routes/index.route')
const phoneRoter = require('./Routes/phone.route')
const { knex } = require('./DATA/DataKnex')


app.use(express.json())




app.use('/', indexRouter)
app.use('/', phoneRoter)




app.use((req,res,next)=>{
    next(createError.NotFound())
})
app.use((err,req,res,next)=>{
    res.status(err.status||500)
    res.send({
        error:{
            status:err.status,
            message:err.message
        }
    })
})

app.listen(3000, () => console.log('START'))

