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
//delete usuario
exports.deleteUsuario=async(req,response)=>{
	console.log(req.body.cursos_realizados)
	  RelationalUsuarios.destroy({
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
exports.postProfesor=async(req,response)=>{
	console.log(req.body.idProfesor)
		RelationalProfesores.create({
      idProfesor: req.body.idProfesor,
      nombre: req.body.nombre,
      nacionalidad: req.body.nacionalidad,
      }).then( (result) => response.json(result) )
		.catch(function(err) {
    	// print the error details
    	console.log(err);
		});		
};
//put de profesor
exports.putProfesor=async(req,response)=>{
	console.log(req.body.idProfesor)
		RelationalProfesores.update({
      nombre: req.body.nombre,
      nacionalidad: req.body.nacionalidad,
    },
    {
  	where:{
  	     idProfesor: req.params.profesor,
  	
    }
      }).then( (result) => response.json(result) )
		.catch(function(err) {
    	// print the error details
    	console.log(err);
		});	

	
};
//delete profesor
exports.deleteProfesor=async(req,response)=>{
	console.log(req.body.idProfesor)
	  RelationalCursos.destroy({
	  	 where:{
       idProfesor: req.params.profesor,
    }
      }).then( (result) => response.json(result) )
	  .catch(function(err) {
      // print the error details
      console.log(err);
	  });	
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
//post de curso
exports.postCurso=async(req,response)=>{
	console.log(req.body.cantEstudiantes)
		RelationalCursos.create({
      idCurso: req.body.idCurso,
      tipo: req.body.tipo,
      categoriaInstrumento: req.body.categoriaInstrumento,
      cantEstudiantes: req.body.cantEstudiantes,
      descripcion: req.body.descripcion,
      }).then( (result) => response.json(result) )
		.catch(function(err) {
    	// print the error details
    	console.log(err);
		});		
};
//actualizar curso 
exports.putCurso=async(req,response)=>{
	console.log(req.body.cantEstudiantes)
		RelationalCursos.update({
      tipo: req.body.tipo,
      categoriaInstrumento: req.body.categoriaInstrumento,
      cantEstudiantes: req.body.cantEstudiantes,
      descripcion: req.body.descripcion,
    },
    {
  	where:{
  	     idCurso: req.params.curso,
  	
    }
      }).then( (result) => response.json(result) )
		.catch(function(err) {
    	// print the error details
    	console.log(err);
		});	
};
//delete curso
exports.deleteCurso=async(req,response)=>{
	console.log(req.body.cantEstudiantes)
	  RelationalCursos.destroy({
	  	 where:{
        idCurso: req.params.curso,
    }
      }).then( (result) => response.json(result) )
	  .catch(function(err) {
      // print the error details
      console.log(err);
	  });	
};
//EventosConservatorio
exports.getEventosConservatorio = async (req, response) =>{
	RelationalEventosConservatorio.findAll()
	.then( (result) => response.json(result))
};
//un evento
exports.getEventoConservatorio = async (req, response) => {
	RelationalEventosConservatorio.findByPk(req.params.evento)
	.then( (result) => response.json(result) )
};
//crear un evento
exports.postEventoConservatorio=async(req,response)=>{
	console.log(req.body.idEvento)
		RelationalEventosConservatorio.create({
      idEvento: req.body.idEvento,
      titulo: req.body.titulo,
      descripcion: req.body.descripcion,
      fecha: req.body.fecha,
      lugar: req.body.lugar,
      organizador: req.body.organizador,
      }).then( (result) => response.json(result) )
		.catch(function(err) {
    	// print the error details
    	console.log(err);
		});		
};
//actualizar 
exports.putEventoConservatorio=async(req,response)=>{
	console.log(req.body.idEvento)
		RelationalEventosConservatorio.update({
      titulo: req.body.titulo,
      descripcion: req.body.descripcion,
      fecha: req.body.fecha,
      lugar: req.body.lugar,
      organizador: req.body.organizador,
    },
    {
  	where:{
  	     idEvento: req.body.idEvento,
  	
    }
      }).then( (result) => response.json(result) )
		.catch(function(err) {
    	// print the error details
    	console.log(err);
		});	
};
exports.deleteEventoConservatorio=async(req,response)=>{
	console.log(req.body.idEvento)
	  RelationalEventosConservatorio.destroy({
	  	 where:{
       idEvento: req.body.idEvento,
  	
    }
      }).then( (result) => response.json(result) )
	  .catch(function(err) {
      // print the error details
      console.log(err);
	  });	
};