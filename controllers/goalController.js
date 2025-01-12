const asyncHandler = require('express-async-handler')
const Goal = require('../models/goal')

exports.getAll = asyncHandler(async (req, res) => {
  const goals = await Goal.find()
  res.json(goals)
})
