'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Albuns_musicas extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Albuns_musicas.belongsTo(models.Albuns, {
                foreignKey: 'id_album'
            })
            Albuns_musicas.belongsTo(models.Musicas, {
                foreignKey: 'id_musica'
            })
        }
    }
    Albuns_musicas.init({
        id_musica: DataTypes.INTEGER,
        id_album: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Albuns_musicas',
    });
    return Albuns_musicas;
};
