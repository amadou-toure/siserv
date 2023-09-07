var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var DISQUES = new Schema({
  NOM: { type: String },
  TYPE: { type: String },
  CAPACITE: { type: Number },
  SERVER: { type: Schema.Types.ObjectId, required: true },
});
const model = mongoose.model("DISQUES", DISQUES);

module.exports = model;
