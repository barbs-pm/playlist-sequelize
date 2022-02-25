'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Artistas extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Artistas.belongsTo(models.Musicas, {
                foreignKey: 'id_musica'
            })
            Artistas.belongsTo(models.Albuns, {
                foreignKey: 'id_album'
            })
        }
    }
    Artistas.init({
        nome: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Artistas',
    });
    return Artistas;
};