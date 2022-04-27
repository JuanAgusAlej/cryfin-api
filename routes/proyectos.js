const { Router } = require("express");

const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");

//ProyectoExiste

const {
  obtenerProyectos,
  crearProyecto,
  
} = require("../controllers/proyecto");

const router = Router();

router.get("/", obtenerProyectos);


router.post(
  "/",
  [
    check("titulo", "El titulo es obligatorio").not().isEmpty(),
    check("monto", "El monto no es un numero").isNumeric(),
    check(
      "descripcion",
      "La descripcion debe tener como mínimo 150 caracteres"
    ).isLength({ min: 150 }),
    validarCampos,
  ],
  crearProyecto
);


module.exports = router;
