'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Playlists extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Playlists.hasMany(models.Playlists_musicas, {
                foreignKey: 'id_playlist'
            })
        }
    }
    Playlists.init({
        nome: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Playlists',
    });
    return Playlists;
};