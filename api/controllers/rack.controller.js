const rackModel = require("../models/rack.model");

const getRacks = async (req, res) => {
  try {
    const racks = await rackModel.find();
    res.json({ code: 200, message: "ok", data: racks });
  } catch (error) {
    res.json({ message: `error:${error}`, code: 500 });
  }
};
const createRack = async (req, res) => {
  try {
    const rack = new rackModel(req.body);
    const result = await rack.save();
    if (result) {
      res.json({
        code: 201,
        message: "rack " + req.body.NOM + " created successfully",
      });
    } else {
      res.json({ message: `error:${error}`, code: 500 });
    }
  } catch (err) {
    res.json({ message: `error:${err}`, code: 500 });
  }
};
const updateRack = async (req, res) => {
  try {
    await rackModel.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Updated successfully" });
  } catch (err) {
    res.json({ message: err });
  }
};

const getOneRack = async (req, res) => {
  try {
    const rack = await rackModel.findById(req.params.id);
    res.json(rack);
  } catch (err) {
    res.json({ message: err });
  }
};

const deleteRack = async (req, res) => {
  try {
    const rack = await rackModel.findByIdAndDelete(req.params.id);
    res.json({ message: `deleted successfully`, code: 200 });
  } catch (err) {
    res.json({ message: `error:${err}`, code: 500 });
  }
};

module.exports = {
  getRacks,
  createRack,
  getOneRack,
  updateRack,
  deleteRack,
};
