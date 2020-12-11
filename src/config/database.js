const moongose =require('mongoose');
require("dotenv").config();

const DB_URI ='mongodb://localhost:localhost:27017/PontosTuristicos';//mongoUri
const connect = ()=>{
    moongose.connect(DB_URI,{
        useNewUrlParser:true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true});
    const connection = moongose.connection;
    connection.on('erro',()=> console.error('Erro ao conectar mongoDB'));
    connection.once('open',()=> console.log('estamos conectadas'));
}

module.exports = {connect}