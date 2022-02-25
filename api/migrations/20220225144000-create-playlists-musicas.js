'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Playlists_musicas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_musica: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Musicas', key: 'id' }
      },
      id_playlist: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Playlists', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Playlists_musicas');
  }
};