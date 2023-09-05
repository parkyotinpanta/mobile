const express = require('express')
const router = express.Router()
const indexcontroller = require('../controllers/index.controllers')



router.get('/:name/:price', indexcontroller.get)
router.post('/', indexcontroller.post)
router.put('/', indexcontroller.put)
router.delete('/', indexcontroller.delete)


module.exports = router 