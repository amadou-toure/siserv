var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var IDENTIFICATION = new Schema({
  LIBELLE: {
    type: String
  }
});

const model = mongoose.model('IDENTIFICATION',IDENTIFICATION);

module.exports = model;