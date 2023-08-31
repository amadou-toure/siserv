
var mongoose = require('mongoose');var Schema = mongoose.Schema;var RAID = new Schema({TYPE: {type: String},SERVEURS: {type: Schema.Types.ObjectId, required: true}}); 
const model = mongoose.model('RAID',RAID);

module.exports = model;