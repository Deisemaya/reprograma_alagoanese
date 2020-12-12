const{request, response}= require('express');
const mongoose = require('mongoose');
const cidades = require('../models/cidadesSchema');

module.exports = {
    show: (req, res)=>{
        cidades.find((error, cidades) => {
            if (error){
                return res.status(500).send(error)
            }else{
                return response.status(200).send({mensagem:"Cidades cadastradas", cidades})
            }

        })
    
    },
    /*create:(req, res, next) =>{
        let{nome, regiao, pontosTuriscos, descricao, cidadehistorica}= req.body

        const newCidade = new cidades({
            nome, 
            regiao,
             pontosTuriscos, 
             descricao,
             cidadehistorica,

        });
        newCidade.save()
        .then((res)=>{
            res.status(201).json({mensagem:`${newCidade.nome} foi criado com sucesso.  `})
        })
        .catch(err => next(err));
        

    }*/
    create: (req,res)=>{
        const cidadeBody= req.body;
        const cidade = new cidades(cidadeBody)
        cidade.save((error)=>{
            if(error){ 
            return res.status (400).send(error)
        }else{
            return res.status(200).send({mensagem: "Cidade cadastrada com sucesso"}, cidade)
        }
           
        })
    }

    
}
