const asyncHandler = require('express-async-handler')
const Habit = require('../models/habit')
const { body, validationResult, matchedData } = require('express-validator')

exports.getAll = asyncHandler(async (req, res) => {
  const habits = await Habit.find()
  res.json(habits)
})

exports.getOne = asyncHandler(async (req, res) => {
  const habit = await Habit.findOne({ _id: req.params.id })
  if (habit) {
    res.json(habit)
  } else {
    res.status(404).json({ message: 'Habit not found.' })
  }
})
