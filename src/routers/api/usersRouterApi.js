const express = require('express');
const router = express.Router();

const usersControllerApi = require('../../controllers/api/usersControllerApi');

//Routeo de admin para ver todos los usuarios
router.get("/allUsers", usersControllerApi.allUsers)

//Routeo al profile
router.get('/userProfile/:id/', usersControllerApi.profile)

 //Exportamos las rutas
module.exports = router;