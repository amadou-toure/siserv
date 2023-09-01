const express = require('express');
const OS = require('../controllers/os.controller');
const auth = require('../middleware/auth');

const route = express.Router();

route.get('/os',auth,OS.getOSs);
route.post('/os',auth,OS.createOS);
route.get('/os/:id',auth,OS.getOneOS);
route.put('/os/:id',auth,OS.updateOS);
route.delete('/os/:id',auth,OS.deleteOS);


module.exports = route