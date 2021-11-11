const express = require("express");
const router = express.Router();

const refequipoController = require('../../controllers/refequipoController');
const refequipoRegController = require('../../controllers//refequipoRegController');
const auth = require('../../middleware/auth');

//Hasta este punto ya vamos en api/refequipo ya comenzamos a
// manejar los metodos

//.com/api/refequipo/listar
router.get("/listar"/* ,auth.verificarAdministrador */,refequipoController.listar/*  ,equipo2Controller.listar */);

//.com/api/refequipo/registrar
router.post("/registrar",refequipoController.registrar,refequipoRegController.registrar);

router.patch("/actualizar/:id",refequipoController.actualizar,refequipoRegController.actualizar);



//.com/api/usuario/actualizar/id del elemento de la colección que quiero modificar
/* router.patch("/actualizar/:id",equipoController.actualizar);

router.get("/buscar",equipoController.buscar); */

module.exports = router;