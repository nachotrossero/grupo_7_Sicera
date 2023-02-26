/* Requieres */
const express = require('express');
const router = express.Router();

/* Controllers Requieres */
const productsControllerApi = require('../../controllers/api/productApi');


//Routeo a todos los productos
router.get('/sidras', productsControllerApi.sidras);

//Routeo detalles de producto
//router.get('/productDetail/:id/', productsController.productDetail);


//Exportamos las rutas
module.exports = router;