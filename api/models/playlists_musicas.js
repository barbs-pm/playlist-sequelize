'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Playlists_musicas extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Playlists_musicas.belongsTo(models.Playlists, {
                foreignKey: 'id_playlist'
            })
            Playlists_musicas.belongsTo(models.Musicas, {
                foreignKey: 'id_musica'
            })
        }
    }
    Playlists_musicas.init({
        id_musica: DataTypes.INTEGER,
        id_playlist: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Playlists_musicas',
    });
    return Playlists_musicas;
};