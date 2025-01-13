const asyncHandler = require('express-async-handler')
const User = require('../models/user')

exports.index = asyncHandler(async (req, res) => {
  res.send('Welcome to the Express API of the Genesis precursor project.')
})
