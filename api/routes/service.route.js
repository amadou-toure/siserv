const express = require('express');
const Service = require('../controllers/service.controller');
const auth = require('../middleware/auth');

const route = express.Router();

route.get('/services',auth,Service.getServices);
route.post('/services',auth,Service.createService);
route.get('/services/:id',auth,Service.getOneService);
route.put('/services/:id',auth,Service.updateService);
route.delete('/services/:id',auth,Service.deleteService);


module.exports = route