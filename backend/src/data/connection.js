const Sequelize = require('sequelize');

const path = 'mysql://root:root@localhost:3306/db_final';
const sequelize = new Sequelize(path, { operatorsAliases: false });

sequelize.authenticate().then(() => {
  console.log('Connexion Exitosa a la base relacional.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;