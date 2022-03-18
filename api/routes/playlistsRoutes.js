const { Router } = require('express')
const PlaylistController = require('../controllers/PlaylistController')

const router = Router()

router
    .get('/playlists', PlaylistController.listAll)
    .get('/playlists/:id', PlaylistController.listOne)
    .post('/playlists', PlaylistController.create)
    .put('/playlists/:id', PlaylistController.update)
    .delete('/playlists/:id', PlaylistController.delete)
    .get('/playlists/:id_playlist/musicas/:id_musica', PlaylistController.listOneMusica)
    .get('/playlists/:id_playlist/musicas/', PlaylistController.listAllMusicas)
    .post('/playlists/musicas/', PlaylistController.insertMusicIntoPlaylist)
    .delete('/playlists/:id_playlist/musicas/:id_musica', PlaylistController.deleteMusicInPlaylist)

module.exports = router