var express = require('express');
var path = require('path');
var app = express();
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});
app.use('/dist', express.static(__dirname + '/dist'));

/*app.get('/dist', function(req, res) {
res.sendFile(path.join(__dirname + '/dist/index.js'));
});*/
app.listen(8081);
