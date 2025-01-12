const asyncHandler = require('express-async-handler')
const Journal = require('../models/journal')

exports.getAll = asyncHandler(async (req, res) => {
  const journals = await Journal.find()
  res.json(journals)
})
