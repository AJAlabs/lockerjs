// Require Express and Dependencies
var express = require('express'),
    http    = require('http'),
    path    = require('path'),
    config  = require('./config'),
    exphbs  = require('express3-handlebars'),
    app     = express();

// Global Configurations & Settings
app.set('title', config.title);

app.set('port', process.env.PORT || config.port);

// TODO: This will most likely be removed as express3-handlebars sets the view path
// app.set('views', path.join(__dirname, 'views'));

// Map the handlebars template engine
app.engine('.hbs', exphbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

// Routes
app.get('/', function (req, res) {
    res.render('index');
});


// Basic HTTP Authentication
// Set the Username and Password HERE
// app.use(express.basicAuth('testUser', 'testPass'));

// Serve up all files and directories in /public
app.configure(function() {
  var hourMs = 1000*60*60;
  app.use(express.static(__dirname + '/public', { maxAge: hourMs }));
  app.use(express.directory(__dirname + '/public'));
  app.use(express.errorHandler());
});


if (!module.parent) {
  // Listen on the following port
  app.listen(app.get('port'));

  // Output the following to the Command-line
  console.log('\nLocker.js - ' + app.settings.env + ' mode\n' +
              'Server address: http://0.0.0.0:' + config.port +
              '\nServer running... press ctrl-c to stop');
}


// Development Environment Configurations & Settings
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


// Production Environment Configurations & Settings
if ('production' == app.get('env')) {
  // place your production configurations here
}
