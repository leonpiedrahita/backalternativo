const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");




const { Refequipolog} = require('../logdedatos');//se debe llamar al modelo con el mismo nombre que se exporta
//en el index de modelos
const obtenerConexion = require('../conexiones/Factoriaconexion');
const obtenerModelo = require('../conexiones/FactoriaModelo');

const tokenServices = require('../services/token');
const connbase2 = obtenerConexion('logdedatos');
const modelorefequipolog = obtenerModelo('Refequipolog', Refequipolog, connbase2)



exports.listar = async (req, res, next) => {


  await modeloequipolog.find()
    /* .populate('propietario', 'nombre -_id') *///este sirve para decir cual quiero enviar y cual no
    //.populate('propietario cliente')

    .then(equipo => {
      /* Cliente.populate(equipo,{path:"propietario"}) */
      /* Cliente.populate(equipo,{path:"propietario", select: 'nombre' }) */

      console.log(equipo)
      next()

    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.registrar = async (req, res, next) => {

  const validationResponse = await tokenServices.decode(req.headers.token);

  const equipo = new modelorefequipolog({
    _id: new mongoose.Types.ObjectId(),
    insercion: req.body,
    tipodeinsercion: 'Registro',
    responsable: validationResponse.id

  });
  await equipo.save()
    .then(result => {
      console.log(result);
      console.log(req.respuesta + "Movimiento registrado");
      res.status(201).json({
        message: 'Referencia de equipo creada'
      });
      next();


    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
      next(err);
    });
};
exports.actualizar = async (req, res, next) => {
  const id = req.params.id;
  const validationResponse = await tokenServices.decode(req.headers.token);

  const equipo = new modelorefequipolog({
    _id: new mongoose.Types.ObjectId(),
    insercion: req.body,
    tipodeinsercion: id +  'Actualización',
    responsable: validationResponse.id

  });
  await equipo.save()
    .then(result => {
      console.log(result);
      console.log(req.respuesta + "Actualización registrada");
      res.status(201).json({
        message: 'Referencia de equipo actualizada'
      });
      next();


    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
      next(err);
    });
};

