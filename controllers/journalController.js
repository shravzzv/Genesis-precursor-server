const asyncHandler = require('express-async-handler')
const Journal = require('../models/journal')

exports.getAll = asyncHandler(async (req, res) => {
  const journals = await Journal.find()
  res.json(journals)
})

exports.getOne = asyncHandler(async (req, res) => {
  const journal = await Journal.findOne({ _id: req.params.id })
  if (journal) {
    res.json(journal)
  } else {
    res.status(404).json({ message: 'Journal not found.' })
  }
})
