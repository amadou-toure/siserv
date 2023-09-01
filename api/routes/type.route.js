const express = require('express');
const Type = require('../controllers/type.controller');
const auth = require('../middleware/auth');

const route = express.Router();

route.get('/types',auth,Type.getTypes);
route.post('/types',auth,Type.createType);
route.get('/types/:id',auth,Type.getOneType);
route.put('/types/:id',auth,Type.updateType);
route.delete('/types/:id',auth,Type.deleteType);


module.exports = route