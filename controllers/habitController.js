const asyncHandler = require('express-async-handler')
const Habit = require('../models/habit')

exports.getAll = asyncHandler(async (req, res) => {
  const habits = await Habit.find()
  res.json(habits)
})
