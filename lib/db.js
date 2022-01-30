const mongoose = require('mongoose');
require('dotenv').config();

const dbUrl = process.env.DB_URL;

module.exports = function () {
  mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => console.log(`Connected to ${dbUrl}`))
    .catch((error) => {
      console.log('could not connected to', error);
      throw error
    })
}