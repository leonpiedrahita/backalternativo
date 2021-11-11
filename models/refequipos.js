const mongoose = require('mongoose');

const refequipoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre: { type: String, required: true },
    marca: { type: String, required: true },
    fabricante: { type: String, required: true },
    servicio: { type: String, required: true },
    clasificacionriesgo: { type: String, required: true },
    periodicidadmantenimiento: { type: String, required: true },
    alto: { type: String, required: true },
    ancho: { type: String, required: true },
    profundo: { type: String, required: true },
    peso: { type: String, required: true },
    voltaje: { type: String, required: true },
    corriente: { type: String, required: true },
    potencia: { type: String, required: true },
    principiodemedicion: { type: String, required: true },
    pruebasporhora: { type: String, required: true },
    temperatura: { type: String, required: true },
    humedad: { type: String, required: true },
    agua: { type: String, required: true },
    desague: { type: String, required: true },
    recomendaciones: { type: String, required: true },
     
    //productImage: { type: String, required: false }
    
}, { timestamps: true });

module.exports = refequipoSchema;

/* module.exports = mongoose.model('Equipo', equipoSchema); */