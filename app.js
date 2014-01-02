// Require Express - http://expressjs.com
var express = require('express');
var app = express();

// Basic HTTP Authentication
// Set the Username and Password HERE
app.use(express.basicAuth('testUser', 'testPass'));

// Server up files and directories in the public directory
app.configure(function() {
  var hourMs = 1000*60*60;
  app.use(express.static(__dirname + '/public', { maxAge: hourMs }));
  app.use(express.directory(__dirname + '/public'));
  app.use(express.errorHandler());
});

// Listen on the following port
app.listen(1717);

// Output the following to the Command-line
console.log('\nLocker.js\nServer address: http://0.0.0.0:1717\nServer running... press ctrl-c to stop');
