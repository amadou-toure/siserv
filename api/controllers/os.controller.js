const osModel = require("../models/os.model");

const getOSs = async (req, res) => {
  try {
    const oss = await osModel.find();
    res.json({ data: oss, message: "ok", code: 200 });
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};
const createOS = async (req, res) => {
  try {
    const os = new osModel(req.body);
    const result = await os.save();
    if (result) {
      res.json({
        message: "os " + req.body.NOM + " created successfully",
        code: 201,
      });
    } else {
      res.json({ message: "error during creation", code: 500 });
    }
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};
const updateOS = async (req, res) => {
  try {
    await osModel.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "deleted successfully", code: 200 });
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};

const getOneOS = async (req, res) => {
  try {
    const os = await osModel.findById(req.params.id);
    res.json({ data: os, code: 200, message: "ok" });
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};

const deleteOS = async (req, res) => {
  try {
    await osModel.findByIdAndDelete(req.params.id);
    res.json({ message: "deleted successfully", code: 200 });
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};

module.exports = {
  getOSs,
  createOS,
  getOneOS,
  updateOS,
  deleteOS,
};
