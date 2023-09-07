var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var TACHE = new Schema({
  SERVEUR: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  ADMINISTRATEUR: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  MANAGER: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  MESSAGE: {
    type: String,
  },
});

const model = mongoose.model("TACHE", TACHE);

module.exports = model;
