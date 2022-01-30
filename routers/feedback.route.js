const express = require("express")
const feedback = require('../controllers/feedback.controller')

const router = express.Router()

router.route('').post(feedback.addFeedback)

module.exports = router