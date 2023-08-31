const express = require('express');
const Service = require('../controllers/service.controller');

const route = express.Router();

route.get('/services',Service.getServices);
route.post('/services',Service.createService);
route.get('/services/:id',Service.getOneService);
route.put('/services/:id',Service.updateService);
route.delete('/services/:id',Service.deleteService);


module.exports = route