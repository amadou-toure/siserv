const express = require('express');
const Role = require('../controllers/role.controller');
const auth = require('../middleware/auth');

const route = express.Router();

route.get('/roles',Role.getRoles);
route.post('/roles',auth,Role.createRole);
route.get('/roles/:id',auth,Role.getOneRole);
route.put('/roles/:id',auth,Role.updateRole);
route.delete('/roles/:id',auth,Role.deleteRole);


module.exports = route