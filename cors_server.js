var express = require('express')
  , cors = require('cors')
  , app = express();
 
app.use(cors());
 
app.get('*', function(req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'});
});
 
app.listen(8090, function() {
  console.log('CORS-enabled web server listening on port 80');
});
