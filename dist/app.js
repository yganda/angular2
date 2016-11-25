/**
 * Created by Andrei_Furs on 11/25/2016.
 */
var express = require('express'),
  server = express(),
  port = process.env.PORT || 8000;

server.use('/', express.static(__dirname + '/app'));
server.use('/node_modules', express.static(__dirname + '/node_modules'));

process.on('uncaughtException', function (err) {
  console.log(err);
});

server.listen(port, function() {
  console.log('listening on port ' + port);
});
