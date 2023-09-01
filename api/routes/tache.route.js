const express = require('express');
const Tache = require('../controllers/taches.controller');
const auth = require('../middleware/auth');

const route = express.Router();

route.get('/taches',auth,Tache.getTaches);
route.post('/taches',auth,Tache.createTache);
route.get('/taches/:id',auth,Tache.getOneTache);
route.put('/taches/:id',auth,Tache.updateTache);
route.delete('/taches/:id',auth,Tache.deleteTache);


module.exports = route