const RelationalUsuarios = require('../models/usuarios')
const RelationalSuscriptores = require('../models/suscriptores')
const RelationalProfesores=require('../models/profesores')
//USUARIOS
	//Get all usuarios
exports.getUsuarios = async (req, response) => {
	RelationalUsuarios.findAll()
	.then( (result) => response.json(result) )
};
   //Get un usuario
exports.getUsuario = async (req, response) => {
	RelationalUsuarios.findByPk(req.params.usuario)
	.then( (result) => response.json(result) )
};
exports.postUsuario=async(rep,response)=>{
	RelationalUsuarios.create({
      usuario: req.body.usuario,
      contraseña: req.body.contraseña,
      eventos_asistidos: req.body.eventos_asistidos,
      cursos_realizados: req.body.cursos_realizados,
      }).then( (result) => res.json(result) )
};

//SUSCRIPTORES
	//Get all Suscriptores
	
exports.getSuscriptores = async (req, response) =>{
	RelationalSuscriptores.findAll()
	.then( (result) => response.json(result))
};

//PROFESORES
	//GET all Profesores
exports.getProfesores = async (req, response) =>{
	RelationalProfesores.findAll()
	.then( (result) => response.json(result))
};

