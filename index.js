var express = require('express')
var app = express()
var ECT = require('ect')
var ectRenderer = ECT({ watch: true, root: __dirname + '/views', ext : '.ect' })

app.set('view engine', 'ect')
app.engine('ect', ectRenderer.render)

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.render('index')
})

//Launch listening server on port 8081
app.listen(8081, function () {
  console.log('app listening on port 8081!')
})