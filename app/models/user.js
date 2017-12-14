var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const user = new Schema({
  name: {
    type: String,
  },
  cpf: {
    type: String,
    unique: true
  },  
  address: {
    type: String,
  },
  birthDate: {
    type: String,
  },
  startDate: {
    type: String,
  },
  height: {
    type: String,
  },
  target: {
    type: String,
  },
  status: {
    type:String
  }
});

module.exports = mongoose.model('User', user);