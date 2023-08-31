const express = require('express');
const Role = require('../controllers/role.controller');

const route = express.Router();

route.get('/roles',Role.getRoles);
route.post('/roles',Role.createRole);
route.get('/roles/:id',Role.getOneRole);
route.put('/roles/:id',Role.updateRole);
route.delete('/roles/:id',Role.deleteRole);


module.exports = route