const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cidadesSchema = new Schema({
    
    nome : {
        type : String,
        required: true
    },

    regiao: {
        type : String,
        required: true
    },
    pontosturisticos: {
        type : String,
        required: true
    },
    descricao: {
        type : String,
        required: true
    },
    cidadehistorica:{
        type : Boolean,
        required: true
    }


},{timestamps: true});

const Cidades = mongoose.model("Cidades",cidadesSchema )

module.exports = Cidades;