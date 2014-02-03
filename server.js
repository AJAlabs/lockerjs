// Require Express and Dependencies
var express = require('express'),
    http    = require('http'),
    path    = require('path'),
    config  = require('./config'),
    app     = express();


// Global Configurations & Settings
app.set('title', config.title);
app.set('port', process.env.PORT || config.port);


app.use(express.logger());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());


// Routes
require('./app/routes')(app);


// Serve up static files in /public
app.use(express.static(__dirname + '/public'));


// TODO: It would be cool to make this a partial
//app.use(express.directory(__dirname + '/public',{icons:true}));


// TODO: This will most likely be removed as express3-handlebars sets the view path
// app.set('views', path.join(__dirname, 'views'));

// Basic HTTP Authentication
// Set the Username and Password HERE
// app.use(express.basicAuth('testUser', 'testPass'));


// Development Environment Configurations & Settings
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


// Production Environment Configurations & Settings
if ('production' == app.get('env')) {
  // place your production configurations here
}


if (!module.parent) {
  // Listen on the following port
  app.listen(app.get('port'));

  // Output the following to the Command-line
  console.log('Locker.js - ' + app.settings.env + ' mode\n' +
              'Server address: http://0.0.0.0:' + config.port +
              '\nServer running... press ctrl-c to stop');
}
exports = module.exports = app;
