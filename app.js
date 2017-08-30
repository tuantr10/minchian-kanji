var express = require('express')
var mongoose = require('mongoose')
var config = require('./core/config')
var app = express()

var mongodb = config.db
mongoose.connect(mongodb)

var desktopApp = require('./apps/desktop/module')
var apiApp = require('./apps/api/module')
var mothershipApp = require('./apps/mothership/module')

desktopApp.init(app)
apiApp.init(app)
mothershipApp.init(app)

//Launch listening server on port 8081
app.listen(8081, function () {
	console.log('app listening on port 8081!')
})