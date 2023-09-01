const express = require('express');
const Observation = require('../controllers/observation.controller');
const auth = require('../middleware/auth');

const route = express.Router();

route.get('/observations',auth,Observation.getObservations);
route.post('/observations',auth,Observation.createObservation);
route.get('/observations/:id',auth,Observation.getOneObservation);
route.put('/observations/:id',auth,Observation.updateObservation);
route.delete('/observations/:id',auth,Observation.deleteObservation);


module.exports = route