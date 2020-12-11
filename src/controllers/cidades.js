const{request, response}= require('express');
const mongoose = require('mongoose');
const Cidades = require('../models/cidadesSchema');

const getAll = (request, response)=>{
    Cidades.find()
    .then((cidades)=>{
        response.status(200).json(cidades)
    })
}

