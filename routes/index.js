//Manejador de rutas

const express = require("express");
const router = express.Router();

//Importo las rutas
const userRouter = require('./api/users');
const articuloRouter = require('./api/articulos');
const categoriaRouter = require('./api/categorias');
const clienteRouter = require('./api/clientes');
const equipoRouter = require('./api/equipos');
const refequipoRouter = require('./api/refequipos');
const reporteRouter = require('./api/reportes');
const firmaRouter = require('./api/firmas');
const ordenRouter = require('./api/ordenes');
const s3sRouter = require('./api/s3s');


//Asocio el siguiente slash a api
//Queda así
router.use("/usuario", userRouter); //api/usuario
router.use("/articulo", articuloRouter);//api/articulo
router.use("/categoria", categoriaRouter);//api/categoria
router.use("/cliente", clienteRouter);//api/cliente
router.use("/equipo", equipoRouter);//api/equipo
router.use("/refequipo", refequipoRouter);//api/refequipo
router.use("/reporte", reporteRouter);//api/reporte
router.use("/firma", firmaRouter);//api/firma
router.use("/orden", ordenRouter);//api/orden
router.use("/imagen", s3sRouter);//api/imagen


module.exports = router;