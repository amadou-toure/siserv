
var mongoose = require('mongoose');var Schema = mongoose.Schema;var OBSERVATION = new Schema({CONTENUS: {type: String}}); 
const model = mongoose.model('OBSERVATION',OBSERVATION);

module.exports = model;