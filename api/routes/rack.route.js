const express = require("express");
const Rack = require("../controllers/rack.controller");
const auth = require("../middleware/auth");

const route = express.Router();

route.get("/racks", auth, Rack.getRacks);
route.post("/racks", auth, Rack.createRack);
route.get("/racks/:id", auth, Rack.getOneRack);
route.put("/racks/:id", auth, Rack.updateRack);
route.delete("/racks/:id", auth, Rack.deleteRack);

module.exports = route;
