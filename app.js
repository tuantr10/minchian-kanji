var express = require('express')
var mongoose = require('mongoose')
var config = require('./core/config')

var app = express()
var ect = require('ect')
var viewPath = __dirname + '/apps/desktop/views'

var mongodb = config.db
app.set('view engine', 'ect')
app.set('views', viewPath);

app.engine('ect', ect({
		//cache: !config.debug,
		root: viewPath,
		ext: '.ect',
		open: '{%',
		close: '%}',
	}).render);

app.get('/', function (req, res) {
	res.render('index')
})

mongoose.connect(mongodb)

//Launch listening server on port 8081
app.listen(8081, function () {
	console.log('app listening on port 8081!')
})