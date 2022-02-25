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
                foreignKey: 'id_artista'
            })
            Artistas.belongsTo(models.Albuns, {
                foreignKey: 'id_artista'
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