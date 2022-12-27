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

//*Prueba session Nacho
//*Armar un contador de visitas
router.get('/pruebaSession', function(req,res){
    if(req.session.numeroVisitas == undefined){
        req.session.numeroVisitas = 0;
    }
    req.session.numeroVisitas++;
    res.send('Session tiene el número: ' + req.session.numeroVisitas)
});
//*Ver que la sesion creada se mantiene en otras páginas
router.get('/mostarNumeroSession',function(req,res){
    res.send('Session tiene el número: ' + req.session.numeroVisitas)
});


module.exports = router;





