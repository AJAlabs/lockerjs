// Require Express - http://expressjs.com
var express = require('express');
var app = express();

// Map the EJS template engine to ".html" files
app.engine('html', require('ejs').renderFile);

// Basic HTTP Authentication
// Set the Username and Password HERE
app.use(express.basicAuth('testUser', 'testPass'));

// Serve up all files and directories in /public
app.configure(function() {
  var hourMs = 1000*60*60;
  app.use(express.static(__dirname + '/public', { maxAge: hourMs }));
  app.use(express.directory(__dirname + '/public'));
  app.use(express.errorHandler());
});

if (!module.parent) {
  // Listen on the following port
  app.listen(7000);

  // Output the following to the Command-line
  console.log('\nLocker.js\nServer address: http://0.0.0.0:7000\nServer running... press ctrl-c to stop');
}
