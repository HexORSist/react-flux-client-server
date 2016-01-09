var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MONGO_URI='mongodb://localhost:27017/users';

mongoose.connect(MONGO_URI);

var userSchema = new Schema({
  username: String,
  password: String
  }
  
  
  /*{tickers: []},
  {collection: 'theChart',versionKey: false}*/
  
);

module.exports = mongoose.model('user', userSchema);