const RelationalUsuarios = require('../models/usuarios')
const RelationalSuscriptores = require('../models/suscriptores')
//USUARIOS
	//Get all usuarios
exports.getUsuarios = async (req, response) => {
	RelationalUsuarios.findAll()
	.then( (result) => response.json(result) )
};


//SUSCRIPTORES
	//Get all Suscriptores
	
exports.getSuscriptores = async (req, response) =>{
	RelationalSuscriptores.findAll()
	.then( (result) => response.json(result))
};



