//tell node we are using express, a templating/routing engine
var express = require('express');
var app = express();

//serve the files on local server
app.use(express.static(__dirname + '/'));

//set up a port to listen for incoming requests
app.set( 'port', ( process.env.PORT || 3000 ));

// Start node server
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
});
