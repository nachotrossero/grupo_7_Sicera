 const express = require('express');
 const router = express.Router();

 const usersController = require('../controllers/usersController');

//Routeo al login
router.get('/login', usersController.login);

//Routeo al registro
router.get('/register', usersController.register);


 //Exportamos las rutas
 module.exports = router;