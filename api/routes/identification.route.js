const express = require('express');
const Identification = require('../controllers/identification.controller');
const auth = require('../middleware/auth');

const route = express.Router();

route.get('/identifications',auth,Identification.getIdentifications);
route.post('/identifications',auth,Identification.createIdentification);
route.get('/identifications/:id',auth,Identification.getOneIdentification);
route.put('/identifications/:id',auth,Identification.updateIdentification);
route.delete('/identifications/:id',auth,Identification.deleteIdentification);


module.exports = route