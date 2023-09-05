const express = require('express')
const router = express.Router()
const phonecontroller = require('../controllers/phone.controllers')
// ดึงค่าคอนโทรเลอ เพื่อเรียกใช้ ตามคีย 



router.get('/phone', phonecontroller.select)
router.post('/create', phonecontroller.insert)
router.put('/:id', phonecontroller.updete)
router.delete('/:id', phonecontroller.delete)



module.exports = router 
//  ส่งออก