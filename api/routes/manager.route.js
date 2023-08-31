const express = require('express');
const Manager = require('../controllers/manager.controller');

const route = express.Router();

route.get('/managers',Manager.getManagers);
route.post('/managers',Manager.createManager);
route.get('/managers/:id',Manager.getOneManager);
route.put('/managers/:id',Manager.updateManager);
route.delete('/managers/:id',Manager.deleteManager);


module.exports = route