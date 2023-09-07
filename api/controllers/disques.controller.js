const disqueModel = require("../models/disques.model");

const getDisques = async (req, res) => {
  try {
    const disques = await disqueModel.find();
    res.json({ data: disques, message: "ok", code: 200 });
  } catch (error) {
    res.json({ message: `error:${error}`, code: 500 });
  }
};
const createDisque = async (req, res) => {
  try {
    const disque = new disqueModel(req.body);
    const result = await disque.save();
    if (result) {
      res.json({
        message: "disque " + req.body.NOM + " created successfully",
        code: 201,
      });
    } else {
      res.json({ message: "error during creation", code: 500 });
    }
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};
const updateDisque = async (req, res) => {
  try {
    await disqueModel.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "updated successfully" });
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};

const getOneDisque = async (req, res) => {
  try {
    const disque = await disqueModel.findById(req.params.id);
    res.json({ data: disque, message: "ok", code: 200 });
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};

const deleteDisque = async (req, res) => {
  try {
    await disqueModel.findByIdAndDelete(req.params.id);
    res.json({ message: "deleted successfully" });
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};

module.exports = {
  getDisques,
  createDisque,
  getOneDisque,
  updateDisque,
  deleteDisque,
};
