const express = require('express');
const s3controller = require('../../controllers/s3Controller');
const reportecontroller = require('../../controllers/reporteController');
const equipocontroller = require('../../controllers/equipoController');
const multer = require('multer');
const multerS3 = require('multer-s3');

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

// Middleware para verificar si el archivo existe
const validarArchivo = (req, res, next) => {
    /* console.log("file",req.file) */
    /* console.log('Equipo.id',JSON.parse(req.body.id_equipo))
    console.log(typeof(req.body.id_equipo))  */  
    /* console.log("reporte",JSON.parse(req.body.reporte))  */
  if (!req.file) {
    return res.status(400).json({ message: 'No se ha proporcionado un archivo' });
  }
  
    next();  
};

// Ruta para guardar archivo en S3 y registrar reporte externo
router.post(
    '/guardar',
    upload.single('file'),
    validarArchivo,
    s3controller.guardarreporte,
    reportecontroller.registrarexterno, 
    equipocontroller.registrarreporteexterno,
    (req, res) => {
      // Responder una sola vez al finalizar todos los middlewares
      res.status(201).json({
        message: 'Archivo guardado y reporte externo creados correctamente',
        id: req.idcreada
      });
    }
  );
  // Ruta para guardar archivo en S3 y registrar documento en equipo
  router.post(
    '/guardardocumento',
    upload.single('file'),
    validarArchivo,
    s3controller.guardardocumentoequipo, 
    equipocontroller.registrardocumento,
    (req, res) => {
      // Responder una sola vez al finalizar todos los middlewares
      res.status(201).json({
        message: 'Documento guardado y asociado al equipo',
        
      });
    }
  );

// Buscar objetos en S3
router.get('/buscar', s3controller.buscar);

// Obtener URL de un objeto en S3
router.post('/buscarurl', s3controller.buscarurl);

module.exports = router;
