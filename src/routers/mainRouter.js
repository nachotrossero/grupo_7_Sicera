
const express = require('express');
const router = express.Router();
// const multer = require('multer');
const mainController = require('../controllers/mainController');



//Routeo al home
router.get('/', mainController.index);
//Routeo al home
router.get('/home', mainController.index);
//Routeo al home
router.get('/index', mainController.index);



//Exportamos las rutas
module.exports = router;
