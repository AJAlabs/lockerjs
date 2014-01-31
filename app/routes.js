// Locker.js Routes

module.exports = function(app) {

// Server-side Routes


// Front-end Single Page Routes for AngularJS
app.get('*', function(req, res) {
  res.sendfile('./public/views/index.html');
});

};
