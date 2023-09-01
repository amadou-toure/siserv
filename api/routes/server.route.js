const express = require('express');
const Server = require('../controllers/server.controller');
const auth = require('../middleware/auth');

const route = express.Router();

route.get('/servers',auth,Server.getServers);
route.post('/servers',auth,Server.createServer);
route.get('/servers/:id',auth,Server.getOneServer);
route.put('/servers/:id',auth,Server.updateServer);
route.delete('/servers/:id',auth,Server.deleteServer);


module.exports = route