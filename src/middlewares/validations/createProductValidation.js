const path = require("path");
const { body } = require('express-validator');

module.exports = [
    body("name")
    .notEmpty().withMessage('Debes completar el campo del nombre.').bail()
    .isLength({min : 5}).withMessage("Debe contener al menos 5 caracteres"),
    body("description")
    .isLength({min : 20}).withMessage("Debe contener al menos 20 caracteres"),
    body("price")
    .notEmpty().withMessage('Debes asignar un precio.'),
    body("image")
    .custom((value, {req}) => {
        let file = req.files;
        let validExtensions = [".png", ".jpg", "jpeg", ".gif"];

        if (file.length > 0) {
            let fileExtension = path.extname(file[0].originalname);
            if (!validExtensions.includes(fileExtension)) {
                throw new Error("Este archivo no es válido");
            }            
        }else {
            throw new Error("Debes seleccionar una imagen");
        }
        return true
    }),
    body("country")
    .notEmpty().withMessage('Debes asignar un país.'),
    body("brand")
    .notEmpty().withMessage('Debes asignar una marca.')
]