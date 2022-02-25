const { Router } = require('express')
const ArtistaController = require('../controllers/artistaController')

const router = Router()

router.get('/artistas', ArtistaController.listAll)
router.get('/artistas/:id', ArtistaController.listOne)
router.post('/artistas', ArtistaController.create)
router.put('/artistas/:id', ArtistaController.update)
router.delete('/artistas/:id', ArtistaController.delete)

module.exports = router