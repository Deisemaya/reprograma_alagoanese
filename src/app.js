const express = require('express');
const app = express();
const cidadesRoutes= require('./routes/cidadesRoutes')
const cors = require('cors');
const database = require('./config/database');
database.connect();

app.use(cors());
//representar o corpo da requisicao com json
app.use(express.json());

//app.use('/', cidadesRoutes)


module.exports= app
