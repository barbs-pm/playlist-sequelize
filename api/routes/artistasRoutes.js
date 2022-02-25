const { Router } = require('express')
const ArtistaController = require('../controllers/artistaController')

const router = Router()

router
    .get('/artistas', ArtistaController.listAll)
    .get('/artistas/:id', ArtistaController.listOne)
    .post('/artistas', ArtistaController.create)
    .put('/artistas/:id', ArtistaController.update)
    .delete('/artistas/:id', ArtistaController.delete)

module.exports = router