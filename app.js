var express = require('express')
var mongoose = require('mongoose')
var config = require('./core/config')
var app = express()

var mongodb = config.db
mongoose.connect(mongodb)

var desktopApp = require('./apps/desktop/module')
desktopApp.init(app)

//Launch listening server on port 8081
app.listen(8081, function () {
	console.log('app listening on port 8081!')
})