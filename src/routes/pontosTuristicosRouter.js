const app = require('express');
const router = app.Router();
const controller = require('../controllers/pontosTuristicos');

/**
@route GET 
@desc Retornar todos os livros
@access Public 
@endpoint 
**/

router.post('/createpontos',controller.create );
/*router.put('/editar/:id', livroControlle.r.atualizarTitulo);
router.patch('/emprestimo/:id', livroController.emprestarLivro);*/


module.exports = router;