const { FeedBack } = require("../models/feedback.model");
const dbCons = require("../constant/db-constant");

const addFeedback = async (reqBody) => {
  try {
    const feedbackJson = await addFeedbackJson(reqBody);
    const feedbackData = new FeedBack(feedbackJson);
    const insertFeedback = await feedbackData.save();
    return {
      serverResponse: {
        isError: false,
        message: "successfully added feedback",
        statusCode: "OK",
      },
      result: {
        data: insertFeedback,
      },
    };
  } catch (error) {
    throw {
      serverResponse: {
        isError: true,
        message: "something went to wrong",
        statusCode: "INTERNAL_SERVER_ERROR",
      },
    };
  }
};

const addFeedbackJson = (reqBody) => {
  const feedbackData = {};
  feedbackData[dbCons.FIELD_BODY_LANG_TONE_RATING] =
    reqBody.bodyLangAndToneRating;

  feedbackData[dbCons.FIELD_BODY_LANG_TONE] = reqBody.bodyLangAndTone;

  feedbackData[dbCons.FIELD_REFLECTING_BACK_RANGE] =
    reqBody.reflectingBackRange;

  feedbackData[dbCons.FIELD_REFLECTING_BACK] = reqBody.reflectingBack;

  feedbackData[dbCons.FIELD_EXPLORATORY_QUESTION_RATING] =
    reqBody.exploratoryQuestionRating;

  feedbackData[dbCons.FIELD_EXPLORATORY_QUESTION] = reqBody.exploratoryQuestion;

  feedbackData[dbCons.FIELD_ADDITIONAL_COMMENTS] = reqBody.additionalComments;

  return feedbackData;
};

module.exports = {
  addFeedback,
};
