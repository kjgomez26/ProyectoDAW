const Sequelize = require('sequelize');


const sequelize = require("../data/connection");
let Usuario = sequelize.define('usuario', {
    usuario: {
    	type: Sequelize.STRING(20),
    	primaryKey: true,
    },
    contraseña: Sequelize.STRING(20),
    eventos_asistidos: Sequelize.INTEGER,
    cursos_realizados:Sequelize.INTEGER,
	},
    {
      freezeTableName: true,
      timestamps: false,
    }
);
Usuario.associate = (models) => {
    Usuario.belongsTo(models.suscriptor);
  };
/*
Usuario.sync().then(() => {
    console.log('New table created');
});*/

module.exports = Usuario;