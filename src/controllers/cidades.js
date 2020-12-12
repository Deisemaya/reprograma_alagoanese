const{request, response}= require('express');

const cidades = require('../models/cidadesSchema');

module.exports = {
    show: (req, res)=>{
        cidades.find((error, cidade) => {
            if (error){
                return res.status(500).send(error)
            }else{
                return response.status(200).send( cidade)
            }

        })
    
    },
    ShowById: (req, res) => {
        const cidadeId = req.params.id;
    
       cidades.findById(cidadeId, (error, cidade) => {
            if(error)
                return res.status(500).send(error);
            else{
                if(cidade)
                    return res.status(200).send(cidade);
                else
                    return res.status(404).send({ message: " Cidade não localizada"})
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
            return res.status(200).send({mensagem: "Cidade cadastrada com sucesso",cidade} )
        }
           
        })
    },

    delete: (req, res)=>{
        const cidadeID = req.params.id;
        cidades.findByIdAndDelete(cidadeID,(error,cidade)=>{
            if(error){
                return res.status(500).send(error)
            }else{
                if(cidade){
                    return res.send(200).send("A Cidade foi apagada")
                }else{
                    return res.status(404).send('Cidade não encontrada')
                }
            }
        })

    },
    update:(req, res)=>{
        const cidadeBody = req.body
        const cidadeId = req.query.id
        const cidadeupdate = {new : true}

        cidades.findByIdAndUpdate(
            cidadeBody, cidadeId,cidadeupdate,
            (error, cidade) => {
                if(error){
                    return res.status(500).send(error)
                }else{
                    if(cidade){
                        return res.status(200).send(cidade)
                    }else{
                        return res.status(404).send({message:'Cidade não encontrada' });
                    }
                }
            }

        )

        

    }
 }
    

