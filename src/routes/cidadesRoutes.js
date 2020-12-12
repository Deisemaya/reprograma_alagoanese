const app = require('express');
const router = app.Router()

const controller = require('../controllers/cidades')

router.get('/',controller.show)
router.get('/:id',controller.ShowById);
router.post('/create', controller.create);
router.delete('/delete/:id', controller.delete)
router.put('/update', controller.update)


module.exports= router