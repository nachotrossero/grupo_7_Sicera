 const express = require('express');
 const router = express.Router();

 const usersController = require('../controllers/usersController');

//Routeo al login
router.get('/login', usersController.login);

//Routeo al registro
router.get('/register', usersController.register);

//Routeo para editar y actualizar información
router.get('/edit/:idUser', usersController.edit)
router.put('/edit/:idUser', (req,res) => {
    res.send('Fui por PUT');
})

//Routeo para borrar Delete
router.delete('/delete/:idUser', function(req,res){
    res.send('Fui por DELETE');
})

 //Exportamos las rutas
 module.exports = router;