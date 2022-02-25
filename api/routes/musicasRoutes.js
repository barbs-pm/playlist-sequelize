const { Router } = require('express')
const MusicaController = require('../controllers/MusicaController')

const router = Router()

router.get('/musicas', MusicaController.listAll)
router.get('/musicas/:id', MusicaController.listOne)
router.post('/musicas', MusicaController.create)
router.put('/musicas/:id', MusicaController.update)
router.delete('/musicas/:id', MusicaController.delete)

module.exports = router