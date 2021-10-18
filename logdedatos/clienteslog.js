const mongoose = require('mongoose');

const clientelogSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    insercion: { type: Object, required: true },
    tipodeinsercion: { type: Object, required: true },
    responsable: { type: String, required: true },
     
    //productImage: { type: String, required: false }
    
}, { timestamps: true });

module.exports = clientelogSchema;