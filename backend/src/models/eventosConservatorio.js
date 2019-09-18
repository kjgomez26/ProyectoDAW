const Sequelize = require('sequelize');


const sequelize = require("../data/connection");
let EventoConservatorio = sequelize.define('evento', {
    idEvento: {
    	type: Sequelize.INTEGER,
    	primaryKey: true,
      autoIncrement: true,
    },
    titulo: Sequelize.STRING(100),
    descripcion: Sequelize.STRING(300),
    fecha: Sequelize.DATE,
    lugar: Sequelize.STRING(30),
    organizador: Sequelize.INTEGER,
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

module.exports = EventoConservatorio;