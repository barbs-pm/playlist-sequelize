'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Musicas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      id_genero: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Generos', key: 'id' }
      },
      id_artista: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Artistas', key: 'id' }
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
    await queryInterface.dropTable('Musicas');
  }
};