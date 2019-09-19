const RelationalUsuarios = require('../models/usuarios')
const RelationalSuscriptores = require('../models/suscriptores')
const RelationalProfesores=require('../models/profesores')
const RelationalCursos=require('../models/cursos')
const RelationalEventosConservatorio=require('../models/eventosConservatorio')

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

//post de usuario
exports.postUsuario=async(req,response)=>{
	console.log(req.body.cursos_realizados)
		RelationalUsuarios.create({
      usuario: req.body.usuario,
      contraseña: req.body.contraseña,
      eventos_asistidos: req.body.eventos_asistidos,
      cursos_realizados: req.body.cursos_realizados,
      }).then( (result) => response.json(result) )
		.catch(function(err) {
    	// print the error details
    	console.log(err);
		});	

	
};
exports.putUsuario=async(req,response)=>{
	console.log(req.body.cursos_realizados)
		RelationalUsuarios.update({
      contraseña: req.body.contraseña,
      eventos_asistidos: req.body.eventos_asistidos,
      cursos_realizados: req.body.cursos_realizados,
    },
    {
  	where:{
  	    usuario: req.params.usuario,
  	
    }
      }).then( (result) => response.json(result) )
		.catch(function(err) {
    	// print the error details
    	console.log(err);
		});	

	
};


//SUSCRIPTORES
	//Get all Suscriptores
	
exports.getSuscriptores = async (req, response) =>{
	RelationalSuscriptores.findAll()
	.then( (result) => response.json(result))
};
//get un suscriptor
exports.getSuscriptor = async (req, response) => {
	RelationalSuscriptores.findByPk(req.params.suscriptor)
	.then( (result) => response.json(result) )
};
//PROFESORES
	//GET all Profesores
exports.getProfesores = async (req, response) =>{
	RelationalProfesores.findAll()
	.then( (result) => response.json(result))
};
//get un profesor
exports.getProfesor = async (req, response) => {
	RelationalProfesores.findByPk(req.params.profesor)
	.then( (result) => response.json(result))
};
//CURSOS
	//GET all Cursos
exports.getCursos = async (req, response) =>{
	RelationalCursos.findAll()
	.then( (result) => response.json(result))
};
	//get un curso
exports.getCurso = async (req, response) => {
	RelationalCursos.findByPk(req.params.curso)
	.then( (result) => response.json(result) )
};	
//EventosConservatorio
exports.getEventosConservatorio = async (req, response) =>{
	RelationalEventosConservatorio.findAll()
	.then( (result) => response.json(result))
};