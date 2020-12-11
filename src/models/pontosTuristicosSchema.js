const mongoose = require('mongoose');
const Schema = mongoose.Schema()

const praias = new Schema({
    cidadesId:{
        type : Schema.types.ObjectId,
        ref: 'cidadesSchema',
        require: true
    },


    nome : {
        type : String,
        require: true
    },

    Tipo:{
        type: String,
        require: true
    },

    esportes:{
        type: String,
        require: true
    }
})