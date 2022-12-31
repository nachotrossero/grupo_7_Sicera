 const express = require('express');
 const router = express.Router();

 const usersController = require('../controllers/usersController');

 const {body} = require('express-validator'); //para validar por ejemplo un formulario
 const validaciones = [
    //body('nombreCompleto').notEmpty().withMessage('Debes completar el campo del nombre.'),]
    //body('apellido').notEmpty().withMessage('Debes completar el campo del apellido.'),
    body('email').isEmail().withMessage('Debes completar el campo del apellido.'),
];



//Middlewares
const upload = require('../middlewares/multerUsers'); //Para que funcione Multer
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')

//!Creo que nos faltaria la validación del usuario y los errores en caso de que no sea usuario
//! let {check, validationResult, body} = require('express-validation')


//Routeo al login
router.get('/login', guestMiddleware, usersController.login);
router.post('/login', validaciones, usersController.loginProcess)

//! Para chequear si el usuario cargó bien los datos
/* router.post('/login',[
    check('email').isEmail().withMessage('Email inválido'),
    check('password').isLenght({min:8}).withMessage('la contraseña debe tener al menos 8 caracteres'),
], usersController.loginProcess) */

/* router.get('/check', function(res,req){
    if(req.session.usuarioLogeado ==undefined){
        res.send('No estás logeado');
    }else{
        res.send('El usuario logueado es '+ req.session.usuarioLogeado)
    }
}) */

//Routeo al registro
router.get('/register', guestMiddleware, usersController.register);
//router.get('/register', guestMiddleware, usersController.register);
router.post('/register', upload.any(''), usersController.createUser); //Para procesar la vista

//Routeo al profile
router.get('/userProfile', authMiddleware , usersController.profile)

//Routeo para editar y actualizar información
router.get('/edit/:idUser', usersController.edit)
router.put('/edit/:idUser', (req,res) => {
    res.send('Fui por PUT');
})


//Routeo para Logout
router.get('/logout/', usersController.logout)

//Routeo para borrar Delete
/* router.delete('/delete/:idUser', function(req,res){
    res.send('Fui por DELETE');
}) */

 //Exportamos las rutas
 module.exports = router;