
var mongoose = require('mongoose');var Schema = mongoose.Schema;var MANAGER = new Schema({NOM: {type: String}}); 
const model = mongoose.model('MANAGER',MANAGER);

module.exports = model;