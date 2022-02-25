const database = require('../models')

class ArtistaController {
    static async listAll(req, res) {
        try {
            const allArtistas = await database.Artistas.findAll()
            return res.status(200).json(allArtistas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async listOne(req, res) {
        const { id } = req.params
        try {
            const oneArtista = await database.Artistas.findOne( { where: { id: Number(id) } } )
            return res.status(200).json(oneArtista) 
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async create(req, res) {
        const newArtista = req.body
        try {
            const newArtistaCreated = await database.Artistas.create(newArtista)
            return res.status(201).json(newArtistaCreated) 
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async update(req, res) {
        const { id } = req.params
        const newInfo = req.body
        try {
            await database.Artistas.update(newInfo,  { where: { id: Number(id) } } )
            const artistaUpdated = await database.Artistas.findOne( { where: { id: Number(id) } } )
            return res.status(200).json(artistaUpdated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async delete(req, res) {
        const { id } = req.params
        try {
            await database.Artistas.destroy({ where: { id: Number(id) } } )
            return res.status(200).json({ mensagem: 'O registro foi deletado' })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = ArtistaController