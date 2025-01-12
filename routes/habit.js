const express = require('express')
const router = express.Router()
const habitController = require('../controllers/habitController')

router.get('/', habitController.getAll)

module.exports = router
