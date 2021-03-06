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
            Albuns.belongsTo(models.Artistas, {
                foreignKey: 'id_artista'
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