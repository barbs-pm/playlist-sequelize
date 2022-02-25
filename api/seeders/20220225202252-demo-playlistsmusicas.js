module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Playlists_musicas', [{
        id_playlist: 1,
        id_musica: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_playlist: 1,
        id_musica: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_playlist: 1,
        id_musica: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_playlist: 2,
        id_musica: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_playlist: 2,
        id_musica: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_playlist: 3,
        id_musica: 28,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_playlist: 3,
        id_musica: 45,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_playlist: 3,
        id_musica: 63,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_playlist: 3,
        id_musica: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Playlists_musicas', null, {})
  }
}
