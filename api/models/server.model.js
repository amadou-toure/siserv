var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SERVEURS = new Schema({
  HOSTNAME: {
    type: String
  },
  IP_ADDRESS: {
    type: String
  },
  RAM: {
    type: String
  },
  CPU: {
    type: String
  },
  ETAT: {
    type: String
  },
  POSITION: {
    type: String
  },
  NBRE_EMPLACEMENT_DISQUE: {
    type: Number
  },
  ADMINISTRATEUR: {
    type: Schema.Types.ObjectId,
    required: true
  },
  RACK: {
    type: Schema.Types.ObjectId,
    required: true
  },
  IDENTIFICATION: {
    type: Schema.Types.ObjectId,
    required: true
  },
  TYPE: {
    type: Schema.Types.ObjectId,
    required: true
  },
  ROLE: {
    type: Schema.Types.ObjectId,
    required: true
  },
  OS: {
    type: Schema.Types.ObjectId,
    required: true
  },
  SERVICE: {
    type: Schema.Types.ObjectId,
    required: true
  },
  MANAGER: {
    type: Schema.Types.ObjectId,
    required: true
  },
  UNITE_BENEFICIAIRE: {
    type: Schema.Types.ObjectId,
    required: true
  },
  UNITE_BENEFICIAIRE: {
    type: Schema.Types.ObjectId,
    required: true
  }
});

const model = mongoose.model('SERVEURS',SERVEURS);

module.exports = model;

