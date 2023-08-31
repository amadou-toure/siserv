const express = require('express');
const Administrateur = require('../controllers/administrateur.controller');

const route = express.Router();

route.get('/administrateurs',Administrateur.getAdministrateurs);
route.post('/administrateurs',Administrateur.createAdministrateur);
route.get('/administrateurs/:id',Administrateur.getOneAdministrateur);
route.put('/administrateurs/:id',Administrateur.updateAdministrateur);
route.delete('/administrateurs/:id',Administrateur.deleteAdministrateur);


module.exports = route