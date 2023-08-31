const express = require('express');
const Identification = require('../controllers/identification.controller');

const route = express.Router();

route.get('/identifications',Identification.getIdentifications);
route.post('/identifications',Identification.createIdentification);
route.get('/identifications/:id',Identification.getOneIdentification);
route.put('/identifications/:id',Identification.updateIdentification);
route.delete('/identifications/:id',Identification.deleteIdentification);


module.exports = route