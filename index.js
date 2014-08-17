if(process.env.NEW_RELIC_LICENSE_KEY)
  require('newrelic');

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

var port = Number(process.env.PORT || 5000);
var server = app.listen(port, function() {
  console.log('Listening on port %d', server.address().port);
});
