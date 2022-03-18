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
            const playlistExiste = await database.Playlists.findOne({
                where: { id: Number(id) }
            })

            if(!playlistExiste){
                return res.status(404).json({ mensagem: 'O registro não existe.' })
            }

            await database.Playlists.destroy( { where: { id: Number(id) } } )
            return res.status(200).json( { mensagem: "O registro foi deletado" } )
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async listOneMusica(req, res) {
        const { id_playlist, id_musica } = req.params
        try {
            const existeMusica = await database.Playlists_musicas.findOne({
                where: {
                    id_playlist: Number(id_playlist),
                    id_musica: Number(id_musica)
                }
            })
            if(!existeMusica) {
                return res.status(404).json({ mensagem: 'Não foi encontrado nenhum registro' })
            }

            const infoMusica = await database.Musicas.findOne({ where: { id: Number(id_musica) } })
            const infoPlaylist = await database.Playlists.findOne({ where: { id: Number(id_playlist) } })
           
            const musicaFormatada = {
                id_playlist: id_playlist,
                id_musica: id_musica, 
                playlist: infoPlaylist.nome,
                musica: infoMusica.nome
            }

            return res.status(200).json(musicaFormatada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async listAllMusicas(req, res) {
        const { id_playlist } = req.params
        try {
            const allMusicas = await database.Playlists_musicas.findAll({
                where: {
                    id_playlist: Number(id_playlist)
                },
                include: {
                    model: database.Musicas
                }
            })
            if(!allMusicas) {
                return res.status(500).json({ mensagem: 'Não foi encontrado nenhum registro' })
            } 
            const musicasFormatas = allMusicas.map(musica => ({
                id_musica: musica.id_musica, 
                id_playlist: musica.id_playlist, 
                nome: musica.Musica.nome
            }))

            return res.status(200).json(musicasFormatas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async insertMusicIntoPlaylist(req, res) {
        const newRegister = req.body
        try {

            const newMusica = await database.Musicas.findOne({
                where: {id: Number(newRegister.id_musica)}
            })
            
            if(!newMusica) {
                return res.status(500).json({ mensagem: 'A música não foi encontrada' })    
            } 
            const newRegisterCreated = await database.Playlists_musicas.create(newRegister)
            
            return res.status(200).json(newRegisterCreated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteMusicInPlaylist(req, res) {
        const { id_playlist, id_musica } = req.params
        try { 
            const musicaExiste = await database.Musicas.findOne({
                where: { id: Number(id_musica) }
            })

            if(!musicaExiste){
                return res.status(404).json({ mensagem: 'O registro não existe.' })
            }

            await database.Playlists_musicas.destroy( { where: {
                id_musica: Number(id_musica),
                id_playlist: Number(id_playlist)
            }})
            return res.status(200).json( { mensagem: "O registro foi deletado" } )
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PlaylistController