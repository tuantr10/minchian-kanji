var express = require('express')
var mongoose = require('mongoose')
var config = require('./core/config')

var app = express()
var ECT = require('ect')
var ectRenderer = ECT({ watch: true, root: __dirname + '/views', ext : '.ect' })

app.set('view engine', 'ect')
app.engine('ect', ectRenderer.render)

app.get('/', function (req, res) {
	res.render('index')
})

var mongodb = config.mongo
mongoose.connect(mongodb);

//Launch listening server on port 8081
app.listen(8081, function () {
	console.log('app listening on port 8081!')
})