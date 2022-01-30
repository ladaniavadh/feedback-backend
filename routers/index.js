const express = require('express');

const router = express.Router();

const feedBackRoute = require('./feedback.route')

router.use('/feedback', feedBackRoute)

module.exports = router;
