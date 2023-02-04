const path = require("path");
const { body } = require('express-validator');

module.exports = [
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
]