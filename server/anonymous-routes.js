var express = require('express'),
    quoter  = require('./quoter');

var app = module.exports = express.Router();

app.get('/api/random-quote', function(req, res) {
  res.status(200).send(quoter.getRandomOne());
});

app.get('/',function(req,res){
  res.status(200).sendFile(process.cwd()+'/index.html');
});
