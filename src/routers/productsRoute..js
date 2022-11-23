const express = require('express');
const router = express.Router();

//Routeo detalles de producto
router.get('/productDetail', mainController.productDetail);

//Routeo al carro de compras
router.get('/productCart', mainController.productCart);

//Routeo a crear producto, vista administrador
router.get('/createProduct', mainController.createProduct);

//Routeo a editar producto, vista administrador
router.get('/editProduct', mainController.editProduct);

//Exportamos las rutas
module.exports = router;