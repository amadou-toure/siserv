var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TYPE = new Schema({
  NOM_TYPE: {
    type: String
  }
});

const model = mongoose.model('TYPE',TYPE);

module.exports = model;