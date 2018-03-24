var express = require('express')
	, logger = require('morgan')
	, app = express()

app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))

app.get('/', function(req, res, next) {
	res.sendFile('index.html')
})

app.listen(3000, function() {
	console.log('Listening on http://localhost:' + 3000)
})