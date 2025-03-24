const mongoose = require('mongoose');

const historialServicioSchema = mongoose.Schema({
    identificaciondereporte: { type: mongoose.Schema.Types.ObjectId, required: true },
    fechadefinalizacion: { type: String, required: true },
    tipodeasistecia: { type: String, required: true },
    responsable: { type: mongoose.Schema.Types.ObjectId, required: true },
    reporteexterno: { type: Number, required: true },
    llavereporte: { type: String, required: false },

    fecha: { type: Date, required: true },
});

const equipoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre: { type: String, required: true },
    marca: { type: String, required: true },
    serie: { type: String, required: true },
    idreferencia: { type: mongoose.Schema.Types.ObjectId, ref: 'Refequipo', required: true },
    propietario: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
    ubicacionnombre:{ type: String, required: true },
    ubicaciondireccion:{ type: String, required: true },
    estado:{ type: String, required: true },
    historialpropietarios: { type: Array, required: false },
    fechadeinstalacion:{ type: String, required: false },
    placadeinventario:{ type: String, required: true },
    tipodecontrato:{ type: String, required: true },
    historialdeservicios: { type: [historialServicioSchema], required: false },
     
    //productImage: { type: String, required: false }
    
}, { timestamps: true });

module.exports = equipoSchema;

/* module.exports = mongoose.model('Equipo', equipoSchema); */