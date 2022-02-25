module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Artistas', [{
                nome: 'Marília Mendonça',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'Taylor Swift',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'My Chemical Romance',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'Turma do Pagode',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'Xamã',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'MC Poze do Rodo',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'Blink-182',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'Simple Plan',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'Miley Cyrus',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'Dua Lipa',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'Guns n Roses',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {})
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Artistas', null, {})
    }
}