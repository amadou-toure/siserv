const express = require('express');
const Rack = require('../controllers/rack.controller');

const route = express.Router();

route.get('/racks',Rack.getRacks);
route.post('/racks',Rack.createRack);
route.get('/racks/:id',Rack.getOneRack);
route.put('/racks/:id',Rack.updateRack);
route.delete('/racks/:id',Rack.deleteRack);


module.exports = route