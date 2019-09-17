const Sequelize = require('sequelize');


const sequelize = require("../data/connection");
let Suscriptor = sequelize.define('suscriptor', {
    correo: {
    	type: Sequelize.STRING(50),
    	primaryKey: true,
    },
    nombre: Sequelize.STRING(30),
    ciudad: Sequelize.STRING(20),
    usuario:Sequelize.STRING(20),
	},
    {
      freezeTableName: true,
      timestamps: false,
    }
);

/*
Usuario.sync().then(() => {
    console.log('New table created');
});*/

module.exports = Suscriptor;