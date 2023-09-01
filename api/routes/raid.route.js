const express = require('express');
const Raid = require('../controllers/raid.controller');
const auth = require('../middleware/auth');

const route = express.Router();

route.get('/raids',auth,Raid.getRaids);
route.post('/raids',auth,Raid.createRaid);
route.get('/raids/:id',auth,Raid.getOneRaid);
route.put('/raids/:id',auth,Raid.updateRaid);
route.delete('/raids/:id',auth,Raid.deleteRaid);


module.exports = route