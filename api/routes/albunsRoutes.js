const { Router } = require('express')
const AlbumController = require('../controllers/AlbunsController')

const router = Router()

router.get('/albuns', AlbumController.listAll)
router.get('/albuns/:id', AlbumController.listOne)
router.post('/albuns', AlbumController.create)
router.put('/albuns/:id', AlbumController.update)
router.delete('/albuns/:id', AlbumController.delete)

module.exports = router