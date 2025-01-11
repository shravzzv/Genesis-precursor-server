const asyncHandler = require('express-async-handler')
const User = require('../models/user')

exports.index = asyncHandler(async (req, res) => {
  res.send('Welcome to the Express API.')
})

exports.users = asyncHandler(async (req, res) => {
  const users = await User.find()
  res.json(users)
})
