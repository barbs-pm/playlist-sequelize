const database = require('../models')

class PlaylistController {
    static async listAll(req, res) {
        try {
            const allPlaylists = await database.Playlists.findAll()
            return res.status(200).json(allPlaylists)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async listOne(req, res) {
        const { id } = req.params
        try {
            const onePlaylist = await database.Playlists.findOne( { where: { id: Number(id) } } )
            return res.status(200).json(onePlaylist)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async create(req, res) {
        const newPlaylist = req.body
        try {
            const newPlaylistCreated = await database.Playlists.create(newPlaylist)
            return res.status(201).json(newPlaylistCreated)          
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async update(req, res) {
        const { id } = req.params
        const newInfo = req.body
        try {
            await database.Playlists.update(newInfo, { where: { id: Number(id) } })
            const playlistUpdated = await database.Playlists.findOne( { where: { id: Number(id) } } )
            return res.status(200).json(playlistUpdated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async delete(req, res) {
        const { id } = req.params
        try {
            await database.Playlists.destroy( { where: { id: Number(id) } } )
            return res.status(200).json( { mensagem: "O registro foi deletado" } )
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PlaylistController