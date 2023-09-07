const observationModel = require("../models/observation.model");

const getObservations = async (req, res) => {
  try {
    const observations = await observationModel.find();
    res.json({ data: observations, message: "ok", code: 200 });
  } catch (error) {
    res.json({ message: `error:${error}`, code: 500 });
  }
};
const createObservation = async (req, res) => {
  try {
    const observation = new observationModel(req.body);
    const result = await observation.save();
    if (result) {
      res.json({
        message: "observation " + req.body.NOM + " created successfully",
        code: 201,
      });
    } else {
      res.json({ message: "error during creation", code: 500 });
    }
  } catch (err) {
    res.json({ message: `error:${err}`, code: 500 });
  }
};
const updateObservation = async (req, res) => {
  try {
    await observationModel.findByIdAndUpdate(req.params.id);
    res.json({ message: "updated successfully", code: 200 });
  } catch (err) {
    res.json({ message: `error:${err}`, code: 500 });
  }
};

const getOneObservation = async (req, res) => {
  try {
    await observationModel.findById(req.params.id);
    res.json({ data: observation, code: 200, message: "ok" });
  } catch (err) {
    res.json({ message: `error:${err}`, code: 500 });
  }
};

const deleteObservation = async (req, res) => {
  try {
    await observationModel.findByIdAndDelete(req.params.id);
    res.json({ message: "deleted successfully", code: 200 });
  } catch (err) {
    res.json({ message: `error:${err}`, code: 500 });
  }
};

module.exports = {
  getObservations,
  createObservation,
  getOneObservation,
  updateObservation,
  deleteObservation,
};
