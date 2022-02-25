const { Router } = require('express')
const AlbumController = require('../controllers/AlbunsController')

const router = Router()

router
    .get('/albuns', AlbumController.listAll)
    .get('/albuns/:id', AlbumController.listOne)
    .post('/albuns', AlbumController.create)
    .put('/albuns/:id', AlbumController.update)
    .delete('/albuns/:id', AlbumController.delete)  
    
module.exports = router