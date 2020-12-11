const app = require('./src/app')
const express = require('express');
require("dotenv").config();

//Subindo o servidor
app.listen(process.env.HTTP_PORT, ()=>{ console.log("Servidor rodando")});
//const PORT = 3000;

//app.listen(PORT, () => {
 //   console.log(`Servidorzinho rodando em http://localhost:${PORT}`)
//});