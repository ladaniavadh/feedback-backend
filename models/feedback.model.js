const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    bodyLangAndToneRating: {
      type: Number,
      required: true,
    },
    bodyLangAndTone: {
      type: String,
      required: true,
    },
    reflectingBackRange: {
      type: Number,
      required: true,
    },
    reflectingBack: {
      type: String,
      required: true,
    },
    exploratoryQuestionRating: {
      type: Number,
      required: true,
    },
    exploratoryQuestion: {
      type: String,
      required: true,
    },
    additionalComments: {
      type: String,
      required: true,
    },
  },
  {
    collection: "feedback",
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const FeedBack = mongoose.model("feedback", feedbackSchema);

module.exports = {
  FeedBack,
};
