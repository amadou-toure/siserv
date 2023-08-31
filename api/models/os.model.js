
var mongoose = require('mongoose');var Schema = mongoose.Schema;var OS = new Schema({NOM: {type: String},VERSION: {type: String}}); 
const model = mongoose.model('OS',OS);

module.exports = model;