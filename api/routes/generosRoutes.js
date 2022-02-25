const { Router } = require('express')
const GeneroController = require('../controllers/GeneroController')

const router = Router()

router.get('/generos', GeneroController.listAll)
router.get('/generos/:id', GeneroController.listOne)
router.post('/generos', GeneroController.create)
router.put('/generos/:id', GeneroController.update)
router.delete('/generos/:id', GeneroController.delete)

module.exports = router