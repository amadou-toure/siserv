
var mongoose = require('mongoose');var Schema = mongoose.Schema;var ROLE = new Schema({NOM: {type: String}});
const model = mongoose.model('ROLE',ROLE);

module.exports = model;