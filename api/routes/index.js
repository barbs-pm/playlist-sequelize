const bodyParser = require("body-parser")
const generos = require('./generosRoutes')
const artistas = require('./artistasRoutes')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(generos)
    app.use(artistas)
}
