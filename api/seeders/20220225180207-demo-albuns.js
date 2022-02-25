module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Albuns', [{
        nome: '1989',
        id_artista: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Evermore',
        id_artista: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Folklore',
        id_artista: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Red',
        id_artista: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Speak',
        id_artista: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Lover',
        id_artista: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Fearless',
        id_artista: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Taylor',
        id_artista: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'American Idiot',
        id_artista: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Albuns', null, {})
  }
}
