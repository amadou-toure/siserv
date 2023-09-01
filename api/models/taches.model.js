var mongoose = require('mongoose');
const observation = require('./observation.model')
var Schema = mongoose.Schema;
var TACHE = new Schema({
  SERVEURS: {
    type: Schema.Types.ObjectId,
    required: true
  },
  ADMINISTRATEUR: {
    type: Schema.Types.ObjectId,
    required: true
  },
  MANAGER: {
    type: Schema.Types.ObjectId,
    required: true
  },
  OBSERVATION: {
    type: Schema.Types.ObjectId,
    required: true
  },
  MESSAGE: {
    type: String
  }
});

const model = mongoose.model('TACHE',TACHE);

module.exports = model;