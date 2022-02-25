'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Musicas extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Musicas.belongsTo(models.Artistas, {
                foreignKey: 'id_musica'
            })
            Musicas.belongsTo(models.Generos, {
                foreignKey: 'id_musica'
            })

            Musicas.hasMany(models.Albuns_musicas, {
                foreignKey: 'id_musica'
            })

            Musicas.hasMany(models.Playlists_musicas, {
                foreignKey: 'id_musica'
            })
        }
    }
    Musicas.init({
        nome: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Musicas',
    });
    return Musicas;
};
