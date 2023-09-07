const tacheModel = require("../models/taches.model");

const getTaches = async (req, res) => {
  try {
    const taches = await tacheModel.find();
    res.json({ data: taches, code: 200, message: "ok" });
  } catch (error) {
    res.json({ message: `error:${error}`, code: 500 });
  }
};
const createTache = async (req, res) => {
  try {
    const tache = new tacheModel(req.body);
    const result = await tache.save();
    if (result) {
      res.json({
        message: "tache " + req.body.NOM + " created successfully",
        code: 201,
      });
    } else {
      res.json({ code: 500, message: "error during creation" });
    }
  } catch (err) {
    res.json({ message: `error:${err}`, code: 500 });
  }
};
const updateTache = async (req, res) => {
  try {
    await tacheModel.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "updted successfully", code: 200 });
  } catch (err) {
    res.json({ message: `error:${err}`, code: 500 });
  }
};

const getOneTache = async (req, res) => {
  try {
    const tache = await tacheModel.findById(req.params.id);
    res.json({ code: 200, data: tache, message: "ok" });
  } catch (err) {
    res.json({ message: `error:${err}`, code: 500 });
  }
};

const deleteTache = async (req, res) => {
  try {
    const tache = await tacheModel.findByIdAndDelete(req.params.id);
    res.json({ code: 200, message: "deleted successfully" });
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = {
  getTaches,
  createTache,
  getOneTache,
  updateTache,
  deleteTache,
};
