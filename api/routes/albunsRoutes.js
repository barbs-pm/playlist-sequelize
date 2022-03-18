const { Router } = require('express')
const AlbumController = require('../controllers/AlbunsController')

const router = Router()

router
    .get('/albuns', AlbumController.listAll)
    .get('/albuns/:id', AlbumController.listOne)
    .post('/albuns', AlbumController.create)
    .put('/albuns/:id', AlbumController.update)
    .delete('/albuns/:id', AlbumController.delete)  
    .get('/albuns/:id_album/musicas/:id_musica', AlbumController.listOneMusica)
    .get('/albuns/:id_album/musicas/', AlbumController.listAllMusicas)
    .post('/albuns/musicas/', AlbumController.insertMusicIntoAlbum)
    .delete('/albuns/:id_album/musicas/:id_musica', AlbumController.deleteMusicInAlbum)
    
module.exports = router