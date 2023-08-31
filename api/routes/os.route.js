const express = require('express');
const OS = require('../controllers/os.controller');

const route = express.Router();

route.get('/os',OS.getOSs);
route.post('/os',OS.createOS);
route.get('/os/:id',OS.getOneOS);
route.put('/os/:id',OS.updateOS);
route.delete('/os/:id',OS.deleteOS);


module.exports = route