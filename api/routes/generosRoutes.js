const { Router } = require('express')
const GeneroController = require('../controllers/GeneroController')

const router = Router()

router
    .get('/generos', GeneroController.listAll)
    .get('/generos/:id', GeneroController.listOne)
    .post('/generos', GeneroController.create)
    .put('/generos/:id', GeneroController.update)
    .delete('/generos/:id', GeneroController.delete)

module.exports = router