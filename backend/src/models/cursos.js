const Sequelize = require('sequelize');


const sequelize = require("../data/connection");
let Curso = sequelize.define('curso', {
    idCurso: {
    	type: Sequelize.INTEGER,
    	primaryKey: true,
      autoIncrement: true,
    },
    tipo: Sequelize.STRING(20),
    categoriaInstrumento: Sequelize.STRING(50),
    cantEstudiantes: Sequelize.INTEGER,
    descripcion: Sequelize.STRING(100),
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

module.exports = Curso;