const raidModel = require("../models/raid.model");

const getRaids = async (req, res) => {
  try {
    const raids = await raidModel.find();
    res.json({ data: raids, code: 200, message: "ok" });
  } catch (err) {
    res.json({ code: 500, message: err });
  }
};
const createRaid = async (req, res) => {
  try {
    const raid = new raidModel(req.body);
    const result = await raid.save();
    if (result) {
      res.json({
        message: "raid " + req.body.NOM + " created successfully",
        code: 201,
      });
    } else {
      res.json({ code: 500, message: "error during creation" });
    }
  } catch (err) {
    res.json({ code: 500, message: err });
  }
};
const updateRaid = async (req, res) => {
  try {
    await raidModel.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "updated successfully", code: 200 });
  } catch (err) {
    res.json({ code: 500, message: err });
  }
};

const getOneRaid = async (req, res) => {
  try {
    const raid = await raidModel.findById(req.params.id);
    res.json({ data: raid, code: 200, message: "ok" });
  } catch (err) {
    res.json({ message: err });
  }
};

const deleteRaid = async (req, res) => {
  try {
    await raidModel.findByIdAndDelete(req.params.id);
    res.json({ message: "deleted successfully" });
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = {
  getRaids,
  createRaid,
  getOneRaid,
  updateRaid,
  deleteRaid,
};
