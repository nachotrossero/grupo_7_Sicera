const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

//Middlewares
const upload = require('../middlewares/multerUsers'); //Para que funcione Multer
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')

const registerValidation = require("../middlewares/validations/registerValidation")
const logInValidation = require("../middlewares/validations/logInValidation")


//Routeo al login
router.get('/login', guestMiddleware, usersController.login);
router.post('/login', logInValidation, usersController.loginProcess)


//Routeo al registro
router.get('/register', guestMiddleware, usersController.register);
//router.get('/register', guestMiddleware, usersController.register);
router.post('/register', upload.single('image'), registerValidation, usersController.createUser); //Para procesar la vista

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