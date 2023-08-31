const express = require('express');
const Raid = require('../controllers/raid.controller');

const route = express.Router();

route.get('/raids',Raid.getRaids);
route.post('/raids',Raid.createRaid);
route.get('/raids/:id',Raid.getOneRaid);
route.put('/raids/:id',Raid.updateRaid);
route.delete('/raids/:id',Raid.deleteRaid);


module.exports = route