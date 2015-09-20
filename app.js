var express = require('express'),
  app = express(),
  mymiddlewares = require('./middlewares/mymiddlewares'),
  server = require('http').Server(app);

app.post('/', mymiddlewares.somemiddleware(), function(req,res){
  res.json(req.body);
});

var port = (process.env.ENV == "development") ? process.env.PORT : "2000";
server.listen(port, 'localhost', function(){
  console.log("listening on http://localhost:"+port);
});

module.exports = app;