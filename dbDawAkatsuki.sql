create database dbDaw;
use dbDaw;

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
contraseña varchar(20));

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
