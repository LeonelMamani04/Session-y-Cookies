const  {check} = require("express-validator");

module.exports = [
      check("name")
      .notEmpty()
      .withMessage("El nombre es obligatorio")
      .bail().isLength({ min: 3, max: 30 })
      .withMessage("El nombre debe tener entre 3 y 30 caracteres"),


      check("nameColor")
      .notEmpty()
      .withMessage("Debe indicar el color"),


      check("email")
      .notEmpty()
      .withMessage("El email es obligatorio")
      .bail()
      .isEmail()
      .withMessage("Email invalido"),


      check("age").notEmpty()
      .withMessage("Debe ingresar la edad")
      .isInt({ min: 0, max: 120 })
      .withMessage("La edad no es validad"),
];
