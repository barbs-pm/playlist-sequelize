const database = require('../models')

class GeneroController {
    static async listAll(req, res) {
        try {
            const allGeneros = await database.Generos.findAll()
            return res.status(200).json(allGeneros)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async listOne(req, res) {
        const { id } = req.params
        try {
            const oneGenero = await database.Generos.findOne( { where: { id: Number(id) } } )
            return res.status(200).json(oneGenero)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async create(req, res) {
        const newGenero = req.body
        try {
            const newGeneroCreated = await database.Generos.create(newGenero)
            return res.status(201).json(newGeneroCreated)          
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async update(req, res) {
        const { id } = req.params
        const newInfo = req.body
        try {
            await database.Generos.update(newInfo, { where: { id: Number(id) } })
            const generoUpdated = await database.Generos.findOne( { where: { id: Number(id) } } )
            return res.status(200).json(generoUpdated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async delete(req, res) {
        const { id } = req.params
        try {
            await database.Generos.destroy( { where: { id: Number(id) } } )
            return res.status(200).json( { mensagem: "O registro foi deletado" } )
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = GeneroController