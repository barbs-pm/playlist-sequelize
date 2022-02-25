const { Router } = require('express')
const MusicaController = require('../controllers/MusicaController')

const router = Router()

router
    .get('/musicas', MusicaController.listAll)
    .get('/musicas/:id', MusicaController.listOne)
    .post('/musicas', MusicaController.create)
    .put('/musicas/:id', MusicaController.update)
    .delete('/musicas/:id', MusicaController.delete)

module.exports = router