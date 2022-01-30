require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT;
const cors = require('cors') 
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
  "origin": "*",
  "preflightContinue": false,
  "methods": "POST, GET, PUT, DELETE, OPTIONS",
  "optionsSuccessStatus": 204,
  "allowedHeaders": ["Origin, X-Requested-With, Content-Type, Accept, Authorization"],
  "exposedHeaders": ["Authorization"]
}))

require('./lib/db')();
const routes = require('./routers/');

app.use('/api/', routes)

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});