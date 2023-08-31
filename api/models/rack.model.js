var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var RACK = new Schema({
  LIBELLE: {
    type: String
  }
});

const model = mongoose.model('RACK',RACK);

module.exports = model;

