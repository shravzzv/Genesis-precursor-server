const express = require('express')
const router = express.Router()
const goalController = require('../controllers/goalController')
const protect = require('../middleware/protect.middleware')

router.use(protect)

router.get('/', goalController.getAll)

router.post('/', goalController.create)

module.exports = router
