const app = require('express');
const pontos = require('../models/pontosTuristicosSchema')





module.exports = {
    create:(req,res,next)=>{
        const  {cidadesId, nome , tipo, esportes,descricao} = req.body;
        const newPonto =  new pontos ({cidadesId, nome , tipo, esportes,descricao

        })
        newPonto.save()
        .then((ponto)=>{
            res.status(201).json(`Ponto ${newPonto.nome} foi criado com sucesso`)
        })
        .catch((error) => next(error))

        }
}
    
        
    
        
    

