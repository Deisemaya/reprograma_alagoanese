# reprograma_alagoanese
##Alagoanese

 A ideia do APi, surgiu devido a necessidade de se ter as informações sobre as principais cidades de Alagoas e seus pontos turistos em um so lugar <p>

## Dependências

VSCODE
MondoDB
Node.js
express
Mongoose
npm
nodemon
dotenv
Cors


## Arquitetura
 \--📂 API
    	   |   server.js
           |   README.md
           |   .env
           |   package.json
    	   |
    		\--📂src
    			    |   app.js
    			    |
                    📂---config
                          database.js
    			    📂---controllers
    			    |       cidadeController.js
                            PontosTuristicosController.js
    			    |
    			    📂---model
    			    |       cidadesSchema
    			    |       pontosTuristicosSchema
    			    📂---routes
    			            cidadesRoutes.js
                            pontosTuristicosRoutes.js
            

## Rotas da API
GET = '/'
GET= '/:id'
Post = '/create'
PUT = '/update'
Delete = '/delete/:id'
