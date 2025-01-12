const express = require('express')
const router = express.Router()
const journalController = require('../controllers/journalController')

router.get('/', journalController.getAll)

module.exports = router
