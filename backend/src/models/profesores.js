const Sequelize = require('sequelize');


const sequelize = require("../data/connection");
let Profesor = sequelize.define('profesor', {
    idProfesor: {
    	type: Sequelize.INTEGER,
    	primaryKey: true,
      autoIncrement: true,
    },
    nombre: Sequelize.STRING(50),
    nacionalidad: Sequelize.STRING(30),
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

module.exports = Profesor;