const httpStatus = require('http-status');
const feedbackService = require("../services/feedback.service");

const addFeedback = async (req, res) => {
  try {
    const response = await feedbackService.addFeedback(req.body);
    return res
      .status(httpStatus[response.serverResponse.statusCode])
      .send(response);
  } catch (error) {
    return res.status(httpStatus[error.serverResponse.statusCode]).send(error);
  }
};

module.exports = {
  addFeedback,
}
