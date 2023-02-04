const path = require("path");
const { body } = require('express-validator');

module.exports = [
    body('email')
    .notEmpty().withMessage('Debes completar el campo de email.').bail()
    .isEmail().withMessage('Debes introducir un email válido.'),
    body('password')
    .notEmpty().withMessage('Debes completar el campo de constraseña.')
]