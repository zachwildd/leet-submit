// npm modules
var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    config = require('./config/config');

// create express app
const app = express();

// disable cors because mask off
// app.use(cors());

// setup middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setup routes
const judge = require('./routes/judge.routes');
app.use('/judge', judge);

// start express app
app.listen(config.PORT, () => {
  console.log('Judge listening on :' + config.PORT);
})
