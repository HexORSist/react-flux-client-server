var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/users');

var userSchema = new Schema({
  username: String,
  password: String
  }
  
  
  /*{tickers: []},
  {collection: 'theChart',versionKey: false}*/
  
);

module.exports = mongoose.model('user', userSchema);