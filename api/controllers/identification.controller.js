const identificationModel = require("../models/identification.model");

const getIdentifications = async (req, res) => {
  try {
    const identifications = await identificationModel.find();
    res.json({ data: identifications, message: "ok", code: 200 });
  } catch (error) {
    res.json({ code: 500, message: `error:${error}` });
  }
};
const createIdentification = async (req, res) => {
  try {
    const identification = new identificationModel(req.body);
    const result = await identification.save();
    if (result) {
      res.json({
        message: "identification " + req.body.NOM + " created successfully",
        code: 201,
      });
    } else {
      res.json({ code: 500, message: "error during creation" });
    }
  } catch (err) {
    res.json({ code: 500, message: `error:${err}` });
  }
};
const updateIdentification = async (req, res) => {
  try {
    await identificationModel.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "updated successfully", code: 200 });
  } catch (err) {
    res.json({ code: 500, message: `error:${err}` });
  }
};

const getOneIdentification = async (req, res) => {
  try {
    const identification = await identificationModel.findById(req.params.id);
    res.json({ data: identification, code: 200, message: "ok" });
  } catch (err) {
    res.json({ code: 500, message: `error:${err}` });
  }
};

const deleteIdentification = async (req, res) => {
  try {
    const identification = await identificationModel.findByIdAndDelete(
      req.params.id
    );
    res.json({ code: 200, message: "deleted successfully" });
  } catch (err) {
    res.json({ code: 500, message: `error:${err}` });
  }
};

module.exports = {
  getIdentifications,
  createIdentification,
  getOneIdentification,
  updateIdentification,
  deleteIdentification,
};
