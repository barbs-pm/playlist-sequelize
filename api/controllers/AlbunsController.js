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
            const artistaExiste = await database.Artistas.findOne({
                where: { id: Number(newAlbum.id_artista) }
            })

            if(!artistaExiste){
                return res.status(404).json({ mensagem: 'O artista não existe.' })
            }

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
            const albumExiste = await database.Albuns.findOne({
                where: { id: Number(id) }
            })

            if(!albumExiste){
                return res.status(404).json({ mensagem: 'O registro não existe.' })
            }

            await database.Albuns.destroy({ where: { id: Number(id) } } )
            return res.status(200).json({ mensagem: 'O registro foi deletado' })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async listOneMusica(req, res) {
        const { id_album, id_musica } = req.params
        try {
            const musicaExiste = await database.Albuns_musicas.findOne({
                where: {
                    id_album: Number(id_album),
                    id_musica: Number(id_musica)
                }
            })
            
            if(!musicaExiste) {
                return res.status(404).json({ mensagem: 'Não foi encontrado nenhum registro.' })
            } 
            
            const infoMusica = await database.Musicas.findOne({ where: { id: Number(id_musica) } })
            const infoAlbum = await database.Albuns.findOne({ where: { id: Number(id_album) } })
            
            const musicaFormatada = {
                id_album: id_album,
                id_musica: id_musica, 
                album: infoAlbum.nome,
                musica: infoMusica.nome
            }
            return res.status(200).json(musicaFormatada)
            
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async listAllMusicas(req, res) {
        const { id_album } = req.params
        try {
            const allMusicas = await database.Albuns_musicas.findAll({
                where: {
                    id_album: Number(id_album)
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
                id_album: musica.id_album,
                nome: musica.Musica.nome
            }))

            return res.status(200).json(musicasFormatas)
            
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async insertMusicIntoAlbum(req, res) {
        const newRegister = req.body
        try {
            
            const newMusica = await database.Musicas.findOne({
                where: { id: Number(newRegister.id_musica) }
            })

            if(!newMusica){
                return res.status(500).json({ mensagem: 'A música não foi encontrada' })
            } else {
                const newRegisterCreated =  await database.Albuns_musicas.create(newRegister)
                return res.status(200).json(newRegisterCreated)
            }

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteMusicInAlbum(req, res) {
        const { id_album, id_musica } = req.params
        try {
            const musicaExiste = await database.Musicas.findOne({
                where: { id: Number(id_musica) }
            })

            if(!musicaExiste){
                return res.status(404).json({ mensagem: 'O registro não existe.' })
            }

            await database.Albuns_musicas.destroy({
                where: {
                    id_album: Number(id_album),
                    id_musica: Number(id_musica)
                }
            })
            return res.status(200).json({ mensagem: 'O registro foi deletado.' })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = AlbumController