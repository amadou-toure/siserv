const express = require('express');
const Disque = require('../controllers/disques.controller');
const auth = require('../middleware/auth');

const route = express.Router();

route.get('/disques',auth,Disque.getDisques);
route.post('/disques',auth,Disque.createDisque);
route.get('/disques/:id',auth,Disque.getOneDisque);
route.put('/disques/:id',auth,Disque.updateDisque);
route.delete('/disques/:id',auth,Disque.deleteDisque);


module.exports = route