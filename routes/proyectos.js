const { Router } = require("express");

const { check } = require("express-validator");
const { validarJWT } = require("../middlewares/validar-jwt");
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
    validarJWT,
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  crearProyecto
);


module.exports = router;
