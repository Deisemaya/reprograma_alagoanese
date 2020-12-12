const app = require('express');
const router = app.Router()

const controller = require('../controllers/cidades')

router.get('/',controller.show);
router.post('/create', controller.create);


module.exports= router