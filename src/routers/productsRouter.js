const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

//Routeo detalles de producto
router.get('/productDetail/:id?/', productsController.productDetail);

//Routeo al carro de compras
router.get('/productCart', productsController.productCart);

//Routeo a crear producto, vista administrador
router.get('/createProduct', productsController.createProduct);

//Routeo a editar producto, vista administrador
router.get('/editProduct/:id?/', productsController.editProduct);

//Exportamos las rutas
module.exports = router;