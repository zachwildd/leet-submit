// npm modules
var express = require('express'),
    bodyParser = require('body-parser')

      // express app
const app = express()

// middleware sessions
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// routes?
app.get('/', (req, res) => {
  res.send(`tried to login ${req.body.username} and pass ${req.body.password}`)
})


// start express app
app.listen(9001, () => {
  console.log('Listening on 9001')
})
