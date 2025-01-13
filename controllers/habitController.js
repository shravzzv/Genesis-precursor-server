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

exports.create = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Title must not be empty.')
    .escape(),

  body('description').trim().optional().escape(),

  body('repeatDays')
    .isArray()
    .withMessage('Repeat days must be an array.')
    .bail()
    .custom((value) => {
      if (value.length === 0) {
        throw new Error('Repeat days must not be empty.')
      }
      return true
    })
    .bail()
    .custom((value) => {
      const validDays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ]
      return value.every((day) => validDays.includes(day))
    })
    .withMessage('Invalid day(s) in repeat days array.'),

  asyncHandler(async (req, res) => {
    const errors = validationResult(req)
    const { title, description, repeatDays } = matchedData(req, {
      onlyValidData: false,
      includeOptionals: true,
    })

    const newHabit = new Habit({
      title,
      description,
      repeatDays,
      user: req.user.id,
    })

    if (errors.isEmpty()) {
      await newHabit.save()
      res.json({ newHabit })
    } else {
      res.status(401).json(errors.array())
    }
  }),
]
