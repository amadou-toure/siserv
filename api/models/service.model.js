
var mongoose = require('mongoose');var Schema = mongoose.Schema;var SERVICE = new Schema({NOM: {type: String}});
const model = mongoose.model('SERVICE',SERVICE);

module.exports = model;