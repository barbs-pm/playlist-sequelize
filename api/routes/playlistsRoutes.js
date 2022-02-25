const { Router } = require('express')
const PlaylistController = require('../controllers/PlaylistController')

const router = Router()

router.get('/playlists', PlaylistController.listAll)
router.get('/playlists/:id', PlaylistController.listOne)
router.post('/playlists', PlaylistController.create)
router.put('/playlists/:id', PlaylistController.update)
router.delete('/playlists/:id', PlaylistController.delete)

module.exports = router