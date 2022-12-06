const express = require('express');
const router = express.Router();
const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const mainController = require('../controllers/mainController');

//Routeo al home
router.get('/', mainController.index);

//Routeo a productos y users
router.use('/products', productsRouter);
router.use('/users', usersRouter);



module.exports = router;





