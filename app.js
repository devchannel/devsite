var express = require('express')
	, logger = require('morgan')
	, app = express()

app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))

app.get('/', function(req, res, next) {
	try{
		var html = '<h1>Hey</h1>'
		res.send(html)
	} catch(e) {
		next(e)
	}
})

app.listen(3000, function() {
	console.log('Listening on http://localhost:' + 3000)
})