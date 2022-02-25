'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Albuns extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Albuns.hasOne(models.Artistas, {
                foreignKey: 'id_album'
            })
            Albuns.hasMany(models.Playlists_musicas, {
                foreignKey: 'id_album'
            })
        }
    }
    Albuns.init({
        nome: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Albuns',
    });
    return Albuns;
};