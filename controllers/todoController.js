const asyncHandler = require('express-async-handler')
const Todo = require('../models/todo')

exports.getAll = asyncHandler(async (req, res) => {
  const todos = await Todo.find()
  res.json(todos)
})
