const express = require('express');
const Disque = require('../controllers/disques.controller');

const route = express.Router();

route.get('/disques',Disque.getDisques);
route.post('/disques',Disque.createDisque);
route.get('/disques/:id',Disque.getOneDisque);
route.put('/disques/:id',Disque.updateDisque);
route.delete('/disques/:id',Disque.deleteDisque);


module.exports = route