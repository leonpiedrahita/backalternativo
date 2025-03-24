const mongoose = require('mongoose');

const reporteSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    numero: { type: Number, required: false },
    tipodeasistencia: { type: String, required: true },
    duracion: { type: String, required: false },
    fechadeinicio: { type: String, required: true },
    fechadefinalizacion: { type: String, required: true },
    infoequipo: { type: Object, required: true },
    propietario: { type: String, required: true },
    nombrecliente: { type: String, required: true },
    nitcliente: { type: String, required: true },
    sedecliente: { type: String, required: true },
    direccioncliente: { type: String, required: true },
    profesionalcliente: { type: String, required: false },
    telefonocliente: { type: String, required: false },
    hallazgos: { type: String, required: false },
    actividades: { type: String, required: false },
    pruebas: { type: String, required: false },
    repuestos: { type: String, required: false },
    observaciones: { type: String, required: false },
    firmacliente: { type: String, required: false },
    firmaingeniero: { type: String, required: false },
    ingeniero: { type: String, required: true },
    reporteexterno: { type: Number, required: true },
    llavereporte:{ type: String, required: false },



    //productImage: { type: String, required: false }

}, { timestamps: true });

module.exports = reporteSchema;
/* module.exports = mongoose.model('Reporte', reporteSchema); */