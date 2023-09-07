const serverModel = require("../models/server.model");

const getServers = async (req, res) => {
  try {
    const servers = await serverModel.find();
    res.json({ data: servers, messsage: "ok", code: 200 });
  } catch (error) {
    res.json({ message: `error: ${error}`, code: 500 });
  }
};
const createServer = async (req, res) => {
  try {
    const server = new serverModel(req.body);
    const result = await server.save();
    if (result) {
      res.json({
        code: 201,
        message: "server " + req.body.name + " created successfully",
      });
    } else {
      res.json({ message: "error during creation", code: 500 });
    }
  } catch (err) {
    res.json({ message: `error: ${err}`, code: 500 });
  }
};
const updateServer = async (req, res) => {
  try {
    await serverModel.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "updated successfully", code: 200 });
  } catch (err) {
    res.json({ message: `error: ${err}`, code: 500 });
  }
};

const getOneServer = async (req, res) => {
  try {
    const server = await serverModel.findById(req.params.id);
    res.json({ data: server, message: "ok", code: 200 });
  } catch (err) {
    res.json({ message: err });
  }
  s;
};

const deleteServer = async (req, res) => {
  try {
    const server = await serverModel.findByIdAndDelete(req.params.id);
    res.json({ message: "deleted successfully", code: 200 });
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = {
  getServers,
  createServer,
  getOneServer,
  updateServer,
  deleteServer,
};
