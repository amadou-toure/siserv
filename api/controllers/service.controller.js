const serviceModel = require("../models/service.model");

const getServices = async (req, res) => {
  try {
    const services = await serviceModel.find();
    res.json({ data: services, code: 200, message: "ok" });
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};
const createService = async (req, res) => {
  try {
    const service = new serviceModel(req.body);
    const result = await service.save();
    if (result) {
      res.json({
        message: "service " + req.body.NOM + " created successfully",
        code: 201,
      });
    } else {
      res.json({ message: "error during creation", code: 500 });
    }
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};
const updateService = async (req, res) => {
  try {
    await serviceModel.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "updated successfully", code: 200 });
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};

const getOneService = async (req, res) => {
  try {
    const service = await serviceModel.findById(req.params.id);
    res.json({ data: service, code: 200, message: "ok" });
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};

const deleteService = async (req, res) => {
  try {
    const service = await serviceModel.findByIdAndDelete(req.params.id);
    res.json({ message: "deleted successfully", code: 200 });
  } catch (err) {
    res.json({ message: err, code: 500 });
  }
};

module.exports = {
  getServices,
  createService,
  getOneService,
  updateService,
  deleteService,
};
