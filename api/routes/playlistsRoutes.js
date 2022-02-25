const { Router } = require('express')
const PlaylistController = require('../controllers/PlaylistController')

const router = Router()

router
    .get('/playlists', PlaylistController.listAll)
    .get('/playlists/:id', PlaylistController.listOne)
    .post('/playlists', PlaylistController.create)
    .put('/playlists/:id', PlaylistController.update)
    .delete('/playlists/:id', PlaylistController.delete)

module.exports = router