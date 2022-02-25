'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Generos extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Generos.hasMany(models.Musicas, {
                foreignKey: 'id_genero'
            })
        }
    }
    Generos.init({
        descr: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Generos',
    });
    return Generos;
};