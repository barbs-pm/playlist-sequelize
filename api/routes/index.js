const bodyParser = require("body-parser")
const generos = require('./generosRoutes')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(generos)
}
