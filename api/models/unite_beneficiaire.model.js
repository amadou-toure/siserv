
var mongoose = require('mongoose');var Schema = mongoose.Schema;var UNITE_BENEFICIAIRE = new Schema({NOM: {type: String},DESCRIPTION: {type: String}});
const model = mongoose.model('UNITE_BENEFICIAIRE',UNITE_BENEFICIAIRE);

module.exports = model;