const asyncHandler = require('express-async-handler')
const Todo = require('../models/todo')

exports.getAll = asyncHandler(async (req, res) => {
  const todos = await Todo.find()
  res.json(todos)
})

exports.getOne = asyncHandler(async (req, res) => {
  const todo = await Todo.findOne({ _id: req.params.id })
  if (todo) {
    res.json(todo)
  } else {
    res.status(404).json({ message: 'Todo not found.' })
  }
})
