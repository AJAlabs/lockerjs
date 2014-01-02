var express = require('express');
var app = express();

//app.get('/', function(req, res){
//  res.send('Locker.js');
//});

app.configure(function() {
  var hourMs = 1000*60*60;
  app.use(express.static(__dirname + '/public', { maxAge: hourMs }));
  app.use(express.directory(__dirname + '/public'));
  app.use(express.errorHandler());
});

app.listen(1717);
console.log('\nLocker.js\nServer address: http://0.0.0.0:1717\nServer running... press ctrl-c to stop');
