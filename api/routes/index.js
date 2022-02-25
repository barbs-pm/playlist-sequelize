const bodyParser = require("body-parser")
const generos = require('./generosRoutes')
const artistas = require('./artistasRoutes')
const playlists = require('./playlistsRoutes')
const musicas = require('./musicasRoutes')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(generos)
    app.use(artistas)
    app.use(playlists)
    app.use(musicas)
}
