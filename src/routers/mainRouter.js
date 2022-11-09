
const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

//Routeo al home
router.get('/', mainController.index);

//Routeo al home
router.get('/home', mainController.index);

//Routeo al home
router.get('/index', mainController.index);

//Routeo al login
router.get('/login', mainController.login);

//Routeo al registro
router.get('/register', mainController.register);

//Routeo detalles de producto
router.get('/productDetail', mainController.productDetail);

//Routeo al carro de compras
router.get('/productCart', mainController.productCart);


//Exportamos las rutas
module.exports = router;