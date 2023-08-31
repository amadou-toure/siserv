const express = require('express');
const Server = require('../controllers/server.controller');

const route = express.Router();

route.get('/servers',Server.getServers);
route.post('/servers',Server.createServer);
route.get('/servers/:id',Server.getOneServer);
route.put('/servers/:id',Server.updateServer);
route.delete('/servers/:id',Server.deleteServer);


module.exports = route