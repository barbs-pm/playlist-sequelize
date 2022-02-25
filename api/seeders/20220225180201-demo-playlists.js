module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Playlists', [{
              nome: 'Happy Hours',
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              nome: 'Sad Songs',
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              nome: 'Trip',
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              nome: 'Churrasco cos migo',
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              nome: 'Sunday in the pool',
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              nome: 'Best Of Taylor Swift',
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              nome: 'Is not just a phase mom',
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              nome: 'Old Rock',
              createdAt: new Date(),
              updatedAt: new Date()
          }
      ], {})
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Playlists', null, {})
  }
}