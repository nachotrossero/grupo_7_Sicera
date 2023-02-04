const express = require('express');
const router = express.Router();
const path = require('path');

const usersController = require('../controllers/usersController');

const {check, body} = require('express-validator'); //para validar por ejemplo un formulario

const validacionesRegister = [
    body('name')
    .notEmpty().withMessage('Debes completar el campo del nombre.').bail()
    .isLength({min : 2}).withMessage("Debe contener al menos 2 caracteres"),
    body('lastname')
    .notEmpty().withMessage('Debes completar el campo del apellido.').bail()
    .isLength({min : 2}).withMessage("Debe contener al menos 2 caracteres"),
    body('email')
    .notEmpty().withMessage('Debes completar el campo de email.').bail()
    .isEmail().withMessage('Debes introducir un email válido.'),
    body('password')
    .notEmpty().withMessage('Debes completar el campo de constraseña.').bail()
    .isLength({min : 8}).withMessage("La contraseña debe contener al menos 8 caracteres"),
    body("image")
    .custom((value, {req}) => {

        let file = req.file;
        let validExtensions = [".png", ".jpg", "jpeg", ".gif"];

        if (file) {

            let fileExtension = path.extname(file.originalname);
            if (!validExtensions.includes(fileExtension)) {
                throw new Error("Este archivo no es válido");
            }            
        }
        return true

    })
];
const validacionesLogin = [
    body('email')
    .notEmpty().withMessage('Debes completar el campo de email.').bail()
    .isEmail().withMessage('Debes introducir un email válido.'),
    body('password')
    .notEmpty().withMessage('Debes completar el campo de constraseña.')
];


//Middlewares
const upload = require('../middlewares/multerUsers'); //Para que funcione Multer
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')

//!Creo que nos faltaria la validación del usuario y los errores en caso de que no sea usuario
//! let {check, validationResult, body} = require('express-validation')


//Routeo al login
router.get('/login', guestMiddleware, usersController.login);
router.post('/login', validacionesLogin, usersController.loginProcess)

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
router.post('/register', upload.single('image'), validacionesRegister, usersController.createUser); //Para procesar la vista

//Routeo al profile
router.get('/userProfile', authMiddleware , usersController.profile)

//Routeo para editar y actualizar información
router.get('/edit/:idUser', usersController.edit)
router.put('/edit/:idUser', (req,res) => {
    res.send('Fui por PUT');
})


//Routeo para Logout
router.get('/logout/', usersController.logout)

//Routeo de admin para ver todos los usuarios
router.get("/allUsers", usersController.allUsers)

router.put("/editUser/:id/", usersController.giveAdmin)

router.post('/deleteUser/:id/', usersController.deleteUser); 

 //Exportamos las rutas
module.exports = router;