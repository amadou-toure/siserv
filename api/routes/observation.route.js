const express = require('express');
const Observation = require('../controllers/observation.controller');

const route = express.Router();

route.get('/observations',Observation.getObservations);
route.post('/observations',Observation.createObservation);
route.get('/observations/:id',Observation.getOneObservation);
route.put('/observations/:id',Observation.updateObservation);
route.delete('/observations/:id',Observation.deleteObservation);


module.exports = route