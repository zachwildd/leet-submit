// npm modules
var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors')

// express app
const app = express()

// disable cors
app.use(cors());

// middleware sessions
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function(error, req, res, next) {
  console.log(req);
  next();
});

// routes?
app.get('/', (req, res) => {
  console.log(req);
  res.send(`tried to login ${req.body.username} and pass ${req.body.password}`)
})

app.post('/problem/submit', (req, res) => {
  const src = req.body.src;
  const test = req.body.test;
  console.log('src: ' + JSON.stringify(src));
  console.log('test: ' + JSON.stringify(test));
  console.log('received' + JSON.stringify(req.body));
})

// app.post('')


// start express app
app.listen(9001, () => {
  console.log('Listening on 9001')
})
