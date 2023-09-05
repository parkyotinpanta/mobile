const express = require('express')
const app = express()
const indexRouter = require('./Routes/index.route')
const phoneRoter = require('./Routes/phone.route')
const{knex} =require('./DATA/DataKnex')

app.use(express.json())



app.use('/', indexRouter)
app.use('/', phoneRoter)


app.listen(3000, () => console.log('START'))