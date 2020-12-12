const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pontosTuristicosSchema = new Schema({
    cidadesId:{
        type : Schema.Types.ObjectId,
        ref: 'cidadesSchema',
        require: true
    },


    nome : {
        type : String,
        require: true
    },

    tipo:{
        type: String,
        require: true
    },

    esportes:{
        type: String,
        require: false
    },
    descricao:{
        type: String,
        require: true
    }
}, { timestamps: true});

const pontosTuristicos = mongoose.model("pontosTuristicos",pontosTuristicosSchema );

module.exports = pontosTuristicos;