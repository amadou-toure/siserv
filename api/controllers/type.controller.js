const typeModel = require("../models/type.model");

const getTypes = async (req, res) => {
  try {
    const types = await typeModel.find();
    res.json({ data: types, message: "ok", code: 200 });
  } catch (error) {
    res.json({ message: `error:${error}`, code: 500 });
  }
};
const createType = async (req, res) => {
  try {
    const type = new typeModel(req.body);
    const result = await type.save();
    if (result) {
      res.json({
        message: "type " + req.body.NOM + " created successfully",
        code: 201,
      });
    } else {
      res.json({ message: "error during creation" });
    }
  } catch (err) {
    res.json({ message: `error:${err}`, code: 500 });
  }
};
const updateType = async (req, res) => {
  try {
    await typeModel.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "updated successfully", code: 200 });
  } catch (err) {
    res.json({ message: `error:${err}`, code: 500 });
  }
};

const getOneType = async (req, res) => {
  try {
    const type = await typeModel.findById(req.params.id);
    res.json({ data: type, message: "ok", code: 200 });
  } catch (err) {
    res.json({ message: `error:${err}`, code: 500 });
  }
};

const deleteType = async (req, res) => {
  try {
    await typeModel.findByIdAndDelete(req.params.id);
    res.json({ message: "deleted successfully", code: 200 });
  } catch (err) {
    res.json({ message: `error:${err}`, code: 500 });
  }
};

module.exports = {
  getTypes,
  createType,
  getOneType,
  updateType,
  deleteType,
};
