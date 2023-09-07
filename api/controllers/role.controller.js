const roleModel = require("../models/role.model");

const getRoles = async (req, res) => {
  try {
    const roles = await roleModel.find();
    res.json({ data: roles, code: 200, message: "ok" });
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};
const createRole = async (req, res) => {
  try {
    const role = new roleModel(req.body);
    const result = await role.save();
    if (result) {
      res.json({
        message: "role " + req.body.NOM + " created successfully",
        code: 201,
      });
    } else {
      res.json({ message: "error during creation", code: 500 });
    }
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};
const updateRole = async (req, res) => {
  try {
    await roleModel.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "updated successfully" });
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};

const getOneRole = async (req, res) => {
  try {
    const role = await roleModel.findById(req.params.id);
    res.json({ data: role, code: 200, message: "ok" });
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};

const deleteRole = async (req, res) => {
  try {
    await roleModel.findByIdAndDelete(req.params.id);
    res.json({ message: "deleted successfully" });
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};

module.exports = {
  getRoles,
  createRole,
  getOneRole,
  updateRole,
  deleteRole,
};
