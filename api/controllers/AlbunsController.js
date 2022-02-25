const database = require('../models')

class AlbumController {
    static async listAll(req, res) {
        try {
            const allAlbuns = await database.Albuns.findAll()
            return res.status(200).json(allAlbuns)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async listOne(req, res) {
        const { id } = req.params
        try {
            const oneAlbum = await database.Albuns.findOne( { where: { id: Number(id) } } )
            return res.status(200).json(oneAlbum) 
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async create(req, res) {
        const newAlbum = req.body
        try {
            const newAlbumCreated = await database.Albuns.create(newAlbum)
            return res.status(201).json(newAlbumCreated) 
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async update(req, res) {
        const { id } = req.params
        const newInfo = req.body
        try {
            await database.Albuns.update(newInfo,  { where: { id: Number(id) } } )
            const albunsUpdated = await database.Albuns.findOne( { where: { id: Number(id) } } )
            return res.status(200).json(albunsUpdated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async delete(req, res) {
        const { id } = req.params
        try {
            await database.Albuns.destroy({ where: { id: Number(id) } } )
            return res.status(200).json({ mensagem: 'O registro foi deletado' })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = AlbumController