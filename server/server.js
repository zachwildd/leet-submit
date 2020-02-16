// npm modules
var express = require('express'),
      bodyParser = require('body-parser')

// express app
const app = express()

// middleware sessions
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// routes
app.post('/', (req, res) => {
  res.send('ello its a bit of a wiffle idn\'t it?');
})

// start express app
app.listen(1337, () => {
  console.log('Listening on :1337')
})
