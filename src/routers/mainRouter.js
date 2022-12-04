
const express = require('express');
const router = express.Router();
// const multer = require('multer');
const mainController = require('../controllers/mainController');



//Routeo al home
router.get('/', mainController.index);
router.get('/home', mainController.index);
router.get('/index', mainController.index);


module.exports = router;
