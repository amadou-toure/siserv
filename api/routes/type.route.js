const express = require('express');
const Type = require('../controllers/type.controller');

const route = express.Router();

route.get('/types',Type.getTypes);
route.post('/types',Type.createType);
route.get('/types/:id',Type.getOneType);
route.put('/types/:id',Type.updateType);
route.delete('/types/:id',Type.deleteType);


module.exports = route