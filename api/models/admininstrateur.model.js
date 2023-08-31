var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ADMINISTRATEUR = new Schema({
  NOM: {
    type: String
  },
  PRENOM: {
    type: String
  },
  POSTE: {
    type: String
  }
});
const model = mongoose.model('ADMINISTRATEUR',ADMINISTRATEUR);

module.exports = model;