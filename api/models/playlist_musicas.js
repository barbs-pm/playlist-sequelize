'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Playlist_musicas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Playlist_musicas.init({
    id_musica: DataTypes.INTEGER,
    id_playlist: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Playlist_musicas',
  });
  return Playlist_musicas;
};