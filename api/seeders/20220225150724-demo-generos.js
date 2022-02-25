module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Generos', [
			{
				descr: 'Rock',
				createdAt: new Date(),
				updatedAt: new Date()			
			},
			{
				descr: 'Pop',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				descr: 'Metal',
				createdAt: new Date(),
				updatedAt: new Date()
			}, 
      {
				descr: 'Reggae',
				createdAt: new Date(),
				updatedAt: new Date()			
			},
			{
				descr: 'Sertanejo',
				createdAt: new Date(),
				updatedAt: new Date()
			},
      {
				descr: 'Punk',
				createdAt: new Date(),
				updatedAt: new Date()
			},
      {
				descr: 'Funk',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				descr: 'Kpop',
				createdAt: new Date(),
				updatedAt: new Date()
			} 
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Generos', null, {})
  }
}
