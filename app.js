var express = require("express");
var path = require('path');
var app = express();

app.get('/', function(req, res){
	res.sendFile(path.resolve('./index.html'));
});

app.get('/cpus', function (req, res) {
	res.send(require('os').cpus().length.toString());
});

app.listen(process.env.PORT || 5000);
