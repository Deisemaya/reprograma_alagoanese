const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cidadesSchema = new Schema({
    
    nome : {
        type : String,
        require: true
    },

    regiao: {
        type : String,
        require: true
    },
    pontosturisticos: {
        type : String,
        require: true
    },
    descricao: {
        type : String,
        require: true
    },
    cidadehistorica:{
        type : Boolean,
        require: true
    }


},{timestamps: true});

const Cidades = mongoose.model("Cidades",cidadesSchema )

module.exports = Cidades;