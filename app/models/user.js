var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const user = new Schema({
  name: {
    type: String,
  },
  cpf: {
    type: String,
  },  
  address: {
    type: String,
  },
  birthDate: {
    type: String,
    unique: true
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