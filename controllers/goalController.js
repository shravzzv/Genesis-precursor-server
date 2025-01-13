const asyncHandler = require('express-async-handler')
const Goal = require('../models/goal')
const { body, validationResult, matchedData } = require('express-validator')

exports.getAll = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id })
  res.json(goals)
})

exports.create = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name must not be empty.')
    .escape(),

  asyncHandler(async (req, res) => {
    const errors = validationResult(req)
    const { name } = matchedData(req, {
      onlyValidData: false,
    })

    const newGoal = new Goal({
      name,
      user: req.user.id,
    })

    if (errors.isEmpty()) {
      await newGoal.save()
      res.json({ newGoal })
    } else {
      res.status(401).json(errors.array())
    }
  }),
]
