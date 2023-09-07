var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var OBSERVATION = new Schema({
  CONTENUS: { type: String },
  TACHE: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});
const model = mongoose.model("OBSERVATION", OBSERVATION);

module.exports = model;
