const express = require('express');
const userController = require('../controllers/user.controller');
const auth = require('../middleware/auth');

const route = express.Router();

route.get('/users',auth, userController.getUsers);
route.post('/users', auth,userController.createUser);
route.get('/users/:id',auth, userController.getOneUser);
route.put('/users/:id', auth,userController.updateUser);
route.delete('/users/:id', auth,userController.deleteUser);
route.post('/login', userController.login);
route.post('/secret', userController.createUser);

module.exports = route;
