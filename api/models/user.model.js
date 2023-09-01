var mongoose = require('mongoose');var Schema = mongoose.Schema;
var USER = new Schema({
    NOM: {
      type: String
    },
    PRENOM: {
      type: String
    },
    EMAIL: {
      type: String
    },
    USERNAME: {
      type: String
    },
    PASSWORD: {
      type: String
    },
    UserROLE:{
        type: String
    }
  });
  
const model = mongoose.model('USER',USER);

module.exports = model;