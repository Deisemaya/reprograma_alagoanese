const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pontosTuristicosSchema = new Schema({
    cidadesId:{
        type : Schema.Types.ObjectId,
        ref: 'cidadesSchema',
        required: true
    },


    nome : {
        type : String,
        require: true
    },

    tipo:{
        type: String,
        required: true
    },

    esportes:{
        type: String,
        required: false
    },
    descricao:{
        type: String,
        required: true
    }
}, { timestamps: true});

const pontosTuristicos = mongoose.model("pontosTuristicos",pontosTuristicosSchema );

module.exports = pontosTuristicos;