drop database db_final;
create database db_final;
use db_final;

create table curso(
idCurso int auto_increment primary key,
tipo varchar(20),
categoriaInstrumento varchar(50),
cantEstudiantes int,
descripcion varchar(100));

create table profesor(
idProfesor int auto_increment primary key,
nombre varchar(50),
nacionalidad varchar(30));

create table asignacionCurso(
profesor int,
curso int,
primary key(profesor,curso),
foreign key (profesor) references profesor(idProfesor),
foreign key (curso) references curso(idCurso));

create table evento(
idEvento int auto_increment primary key,
titulo varchar(100),
descripcion varchar(300),
fecha date,
lugar varchar(30),
organizador int,
foreign key (organizador) references profesor(idProfesor));

create table colaboracion(
profesor int,
evento int,
primary key(profesor,evento),
foreign key (profesor) references profesor(idProfesor),
foreign key (evento) references evento(idEvento));

create table usuario(
usuario varchar(20) primary key,
contraseña varchar(20),
eventos_asistidos int,
cursos_realizados int);

create table comentario(
idComentario int auto_increment primary key,
titulo varchar(20),
contenido varchar(200),
usuario varchar(20),
foreign key (usuario) references usuario(usuario));

create table comentariosEvento(
comentario int,
evento int,
primary key(comentario,evento),
foreign key (comentario) references comentario(idComentario),
foreign key (evento) references evento(idEvento));

create table suscriptor(
correo varchar(50),
nombre varchar(30),
ciudad varchar(20),
usuario varchar(20),
foreign key (usuario) references usuario(usuario));



INSERT INTO usuario (usuario,contraseña,eventos_asistidos,cursos_realizados) 
	VALUES('cinviram','cinviram',10,2);
INSERT INTO usuario (usuario,contraseña,eventos_asistidos,cursos_realizados) 
	VALUES('luiggisao','luiggisao',20,3);
INSERT INTO usuario (usuario,contraseña,eventos_asistidos,cursos_realizados) 
	VALUES('kgomez','kgomez',30,4);
INSERT INTO usuario (usuario,contraseña,eventos_asistidos,cursos_realizados) 
	VALUES('antho95','antho95',15,1);
INSERT INTO usuario (usuario,contraseña,eventos_asistidos,cursos_realizados) 
	VALUES('svallejo','svallejo',18,2);
INSERT INTO usuario (usuario,contraseña,eventos_asistidos,cursos_realizados) 
	VALUES('thaisama','thaisama',21,3);
INSERT INTO profesor(idProfesor, nombre, nacionalidad)
	VALUES(1,'Lucia Lopez', 'italiana');
INSERT INTO profesor(idProfesor, nombre, nacionalidad)
	VALUES(2,'Dante Ortiz', 'italiano');
INSERT INTO profesor(idProfesor, nombre, nacionalidad)
	VALUES(3,'Gustavo Macias', 'ecuatoriano');
INSERT INTO profesor(idProfesor, nombre, nacionalidad)
	VALUES(4,'Andrea Ramírez', 'ecuatoriana');
INSERT INTO profesor(idProfesor, nombre, nacionalidad)
	VALUES(5,'Martin Andrade', 'ecuatoriano');
INSERT INTO profesor(idProfesor, nombre, nacionalidad)
	VALUES(6,'Rogger Zambrano', 'ecuatoriano');
INSERT INTO profesor(idProfesor, nombre, nacionalidad)
	VALUES(7,'Ginger Samaniego', 'ecuatoriana');
INSERT INTO profesor(idProfesor, nombre, nacionalidad)
	VALUES(8,'Solange Salazar', 'chilena');
INSERT INTO profesor(idProfesor, nombre, nacionalidad)
	VALUES(9,'Miguel Andres Luna', 'argentino');
INSERT INTO profesor(idProfesor, nombre, nacionalidad)
	VALUES(10,'Steven Ford', 'estadounidense');
INSERT INTO profesor(idProfesor, nombre, nacionalidad)
	VALUES(11,'Luciano Venturi', 'italiano');
INSERT INTO curso(idCurso,tipo,categoriaInstrumento,cantEstudiantes,descripcion)
	VALUES(1,'libre','guitarra',25,'Abierto para grupos interesados en la música.');
INSERT INTO curso(idCurso,tipo,categoriaInstrumento,cantEstudiantes,descripcion)
	VALUES(2,'libre','violin',20,'Abierto para grupos interesados en la música');
INSERT INTO curso(idCurso,tipo,categoriaInstrumento,cantEstudiantes,descripcion)
	VALUES(3,'libre','piano',23,'Abierto para grupos interesados en la música');
INSERT INTO curso(idCurso,tipo,categoriaInstrumento,cantEstudiantes,descripcion)
	VALUES(4,'formal','violoncello',15,'prepara a los alumnos para la obtención del título de “Bachiller en Música”');
INSERT INTO curso(idCurso,tipo,categoriaInstrumento,cantEstudiantes,descripcion)
	VALUES(5,'formal','bajo',10,'prepara a los alumnos para la obtención del título de “Bachiller en Música”');
                    
INSERT INTO evento(idEvento, titulo, descripcion,fecha,lugar,organizador)
	VALUES(1, 'Tercer Festival Internacional de Música','Es un evento social y cultura, el cual brinda educación a través de la música clásica fomentando el intercambio de culturas entre artistas de diferentes lugares de Ecuador y Latinoamérica','2019-09-05','Auditorio del MAAC',2);
INSERT INTO evento(idEvento, titulo, descripcion,fecha,lugar,organizador)
	VALUES(2, 'Gran noche de talentos','Evento pagado donde los alumnos demostraran su talento','2019-09-12','Auditorio del MAAC',1);
INSERT INTO evento(idEvento, titulo, descripcion,fecha,lugar,organizador)
	VALUES(3, 'Segundo Festival de Orquestas','','2019-10-12  ','Teatro Centro Civico',1);
INSERT INTO evento(idEvento, titulo, descripcion,fecha,lugar,organizador)
	VALUES(4, 'MasterClass en Guayaquil','Este es un evento que se realiza con el fin de fortalecer y desarrollar el proceso académico de los músicos guayaquileños','2019-10-22','Conservatorio Niccoló Paganini',2);
INSERT INTO evento(idEvento, titulo, descripcion,fecha,lugar,organizador)
	VALUES(5, 'Concierto de Grandes Orquestas','En este concierto se pondrá en el escenario el trabajo realizado a lo largo del presente año lectivo con las agrupaciones del Conservatorio','2019-11-13','Teatro Sánchez Aguilar',4);
    
    INSERT INTO suscriptor(correo,nombre,ciudad,usuario)
	VALUES('cinviram@espol.edu.ec','Cindy Ramirez','Guayaquil','cinviram');
    
INSERT INTO suscriptor(correo,nombre,ciudad,usuario)
	VALUES('luiggisao@espol.edu.ec','Luiggi Alarcon','Guayaquil','luiggisao');

INSERT INTO suscriptor(correo,nombre,ciudad,usuario)
	VALUES('kgomez@espol.edu.ec','Kevin Gomez','Quito','kgomez');

INSERT INTO suscriptor(correo,nombre,ciudad,usuario)
	VALUES('antho95@espol.edu.ec','Anthony Espinoza','Cuenca','antho95');

    
INSERT INTO suscriptor(correo,nombre,ciudad,usuario)
	VALUES('thaisama@espol.edu.ec','Thaily Samaniego','Riobamba','thaisama');