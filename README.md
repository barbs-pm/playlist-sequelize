# Playlisto

Playlisto is an API Rest to controll songs, albums and create playlists.

## Objective 
- Create a database model
- Implement routes, controllers, models and views (working on this last one yet)
- Create, read, update and delete songs, albums and playlists
- Last but not least, work perfectly fine without bugs :)

## How to use
1. In **\api\config\config.json** change database information (username, password, database, port and host) to your own info
2. Open terminal or cmd and run this (the last command only to populate db if you don't want an empty db to work)
```
npm install
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```
3. Start the project
```
npm start
```
4. To test the API, you can use [Postman](https://www.postman.com/downloads/), or another application

## How to contribute

To contribute and make the open source community an amazing place to learn, design, create and inspire others. Just follow the instructions below:

1. Fork the project
2. Create a branch with the new feature (`git checkout -b feature/feature`)
3. Commit (`git commit -m 'Add some feature'`)
4. Push the Branch (`git push origin feature/feature`)
5. Open a Pull Request 

## Author

- **[Bárbara Pegoraro Markus](https://github.com/barbs-pm)** - _Acadêmica do Curso de Ciência da Computação - UFFS_. 
