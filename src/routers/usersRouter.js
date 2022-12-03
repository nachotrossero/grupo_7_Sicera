 const express = require('express');
 const router = express.Router();

 const usersController = require('../controllers/usersController');

//Routeo al login
router.get('/login', usersController.login);

//Routeo al registro
router.get('/register', usersController.register);

//Routeo para editar información
router.get('/edit/:idUser', usersController.edit)

 //Exportamos las rutas
 module.exports = router;