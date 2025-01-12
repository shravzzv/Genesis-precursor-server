const asyncHandler = require('express-async-handler')
const User = require('../models/user')

exports.getAll = asyncHandler(async (req, res, next) => {
  const users = await User.find()
  res.status(200).json(users)
})
