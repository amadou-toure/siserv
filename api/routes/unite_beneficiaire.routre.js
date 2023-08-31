const express = require('express');
const Unite_beneficiaire = require('../controllers/unite_beneficiaire.controller');

const route = express.Router();

route.get('/unite_beneficiaires',Unite_beneficiaire.getUnite_beneficiaires);
route.post('/unite_beneficiaires',Unite_beneficiaire.createUnite_beneficiaire);
route.get('/unite_beneficiaires/:id',Unite_beneficiaire.getOneUnite_beneficiaire);
route.put('/unite_beneficiaires/:id',Unite_beneficiaire.updateUnite_beneficiaire);
route.delete('/unite_beneficiaires/:id',Unite_beneficiaire.deleteUnite_beneficiaire);


module.exports = route