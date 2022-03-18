const database = require('../models')

class MusicaController {
    static async listAll(req, res) {
        try {
            const allMusicas = await database.Musicas.findAll()
            return res.status(200).json(allMusicas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async listOne(req, res) {
        const { id } = req.params
        try {
            const oneMusica = await database.Musicas.findOne( { where: { id: Number(id) } } )
            return res.status(200).json(oneMusica)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async create(req, res) {
        const newMusica = req.body
        try {
            const newMusicaCreated = await database.Musicas.create(newMusica)
            return res.status(201).json(newMusicaCreated)          
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async update(req, res) {
        const { id } = req.params
        const newInfo = req.body
        try {
            await database.Musicas.update(newInfo, { where: { id: Number(id) } })
            const musicaUpdated = await database.Musicas.findOne( { where: { id: Number(id) } } )
            return res.status(200).json(musicaUpdated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async delete(req, res) {
        const { id } = req.params
        try {
            const musicaExiste = await database.Musicas.findOne({
                where: { id: Number(id) }
            })

            if(!musicaExiste){
                return res.status(404).json({ mensagem: 'O registro não existe.' })
            }

            await database.Musicas.destroy( { where: { id: Number(id) } } )
            return res.status(200).json( { mensagem: "O registro foi deletado" } )
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = MusicaController