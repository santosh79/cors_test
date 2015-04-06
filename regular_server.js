var express = require('express'),
    fs = require('fs'),
    app = express();
 
app.get('*', function(req, res, next) {
  res.set('Content-Type', 'text/html');
  res.send(fs.readFileSync('test.html'));
});
 
var port = 8080;
app.listen(port, function(){
  console.log('web server listening on port ' +  port);
});
