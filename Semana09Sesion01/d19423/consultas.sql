-- create database Semana09Sesion02;
-- drop database Semana09Sesion02;
use Semana09Sesion02;

-- create table Prueba1(
-- 	id int ,
--     detalle varchar(30)
-- );

-- drop table Prueba1;

-- alter table Prueba1 add fecha date; 

-- create table nacionalidad(
-- 	id int primary key AUTO_INCREMENT,
--     detalle varchar(50) not null unique
-- );

-- insert into nacionalidad(detalle) values('Lima'),('Quito');
-- -- insert into nacionalidad(id,detalle) values(1,'Bogota');


-- create table Prueba1(
-- 	id int primary key AUTO_INCREMENT,
--     detalle varchar(30) not null,
--     email varchar(100) not null unique,
--     ciudad varchar(255) DEFAULT 'Lima',
--     idNacionalidad int not null,
--     fecha date,
--     FOREIGN KEY (idNacionalidad) REFERENCES nacionalidad(id)
-- );
-- insert into Prueba1(id, email, idnacionalidad, fecha ) 
-- values(8, 'juan@x-codec.net', 2, '2024-01-16');


-- insert into Prueba1(id,detalle, email, idnacionalidad, fecha ) 
-- values(2,'Mi segundo detalle', 'dlopez@x-codec.net', 2, '2024-01-17');


-- insert into Prueba1(id,detalle, email, idnacionalidad, fecha ) 
-- values(3,'Mi tercer detalle', 'rpineda@x-codec.net', 2, '2024-01-17');

-- insert into Prueba1(id,detalle, email, idnacionalidad, fecha ) 
-- values(3,'Mi tercer detalle', 'klam@x-codec.net', 1, '2024-01-17');

-- select * from Prueba1;
-- select * from nacionalidad;


create table usuarios(
	id int primary key AUTO_INCREMENT,
    username varchar(50) not null unique,
    password varchar(100) not null,
    email varchar(50) not null unique,
    activo bit default 0,
    usuarioCreacion int not null,
    fechacreacion   TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP,
    usuarioModificacion int null,
    fechamodificacion  TIMESTAMP null,
    FOREIGN KEY (usuarioCreacion) REFERENCES usuarios(id),
    FOREIGN KEY (usuarioModificacion) REFERENCES usuarios(id)
);

insert into usuarios(username, password, email, usuarioCreacion)
values('rpineda', '1234567890', 'rpineda@x-codec.net',1);

select * from usuarios;
update usuarios set 
activo = 1, 
usuarioModificacion = 1,
fechaModificacion = now()
where id = 1;
select * from usuarios;


create table especies(
	id int primary key AUTO_INCREMENT,
    detalle varchar(50) not null,
    activo bit default 1,
    usuarioCreacion int not null,
    fechacreacion   TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP,
    usuarioModificacion int null,
    fechamodificacion  TIMESTAMP null,
    FOREIGN KEY (usuarioCreacion) REFERENCES usuarios(id),
    FOREIGN KEY (usuarioModificacion) REFERENCES usuarios(id)
);
drop table especies;
insert into especies(detalle, usuariocreacion)
values('Gato',1),
('Perro', 1);

update especies set detalle = 'Gatito', usuarioModificacion = 1, fechaModificacion = now()where id =1;
select * from especies;

create table razas(
	id int primary key AUTO_INCREMENT,
    detalle varchar(50) not null,
    activo bit default 1,
    usuarioCreacion int not null,
    fechacreacion   TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP,
    usuarioModificacion int null,
    fechamodificacion  TIMESTAMP null,
    FOREIGN KEY (usuarioCreacion) REFERENCES usuarios(id),
    FOREIGN KEY (usuarioModificacion) REFERENCES usuarios(id)
);
-- drop table especies;
insert into razas(detalle, usuariocreacion)
values('Mestizo',1),
('Angora', 1);

select * from razas;

create table sexo(
	id int primary key AUTO_INCREMENT,
    detalle varchar(50) not null,
    activo bit default 1,
    usuarioCreacion int not null,
    fechacreacion   TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP,
    usuarioModificacion int null,
    fechamodificacion  TIMESTAMP null,
    FOREIGN KEY (usuarioCreacion) REFERENCES usuarios(id),
    FOREIGN KEY (usuarioModificacion) REFERENCES usuarios(id)
);
-- drop table especies;
insert into sexo(detalle, usuariocreacion)
values('Macho',1),
('Hembra', 1);

select * from sexo;


create table color(
	id int primary key AUTO_INCREMENT,
    detalle varchar(50) not null,
    activo bit default 1,
    usuarioCreacion int not null,
    fechacreacion   TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP,
    usuarioModificacion int null,
    fechamodificacion  TIMESTAMP null,
    FOREIGN KEY (usuarioCreacion) REFERENCES usuarios(id),
    FOREIGN KEY (usuarioModificacion) REFERENCES usuarios(id)
);
-- drop table especies;
insert into color(detalle, usuariocreacion)
values('Blanco',1),
('Negro', 1);

select * from color;


create table tipoIdentificacion(
	id int primary key AUTO_INCREMENT,
    detalle varchar(50) not null,
    activo bit default 1,
    usuarioCreacion int not null,
    fechacreacion   TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP,
    usuarioModificacion int null,
    fechamodificacion  TIMESTAMP null,
    FOREIGN KEY (usuarioCreacion) REFERENCES usuarios(id),
    FOREIGN KEY (usuarioModificacion) REFERENCES usuarios(id)
);
-- drop table especies;
insert into TipoIdentificacion(detalle, usuariocreacion)
values('DNI',1),
('CE', 1);

select * from tipoIdentificacion;



create table vacunas(
	id int primary key AUTO_INCREMENT,
    detalle varchar(50) not null,
    activo bit default 1,
    usuarioCreacion int not null,
    fechacreacion   TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP,
    usuarioModificacion int null,
    fechamodificacion  TIMESTAMP null,
    FOREIGN KEY (usuarioCreacion) REFERENCES usuarios(id),
    FOREIGN KEY (usuarioModificacion) REFERENCES usuarios(id)
);
-- drop table especies;
insert into vacunas(detalle, usuariocreacion)
values('TripeFelina',1),
('Rabia', 1);

select * from vacunas;


create table propietarios(
	id int primary key AUTO_INCREMENT,
    idTipoIdentificacion int not null,
    nombre varchar(50) not null,
    apellido varchar(50) not null,
    direccion varchar(255) not null,
    telefono varchar(15) not null,
    activo bit default 1,
    usuarioCreacion int not null,
    fechacreacion   TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP,
    usuarioModificacion int null,
    fechamodificacion  TIMESTAMP null,
    FOREIGN KEY (usuarioCreacion) REFERENCES usuarios(id),
    FOREIGN KEY (usuarioModificacion) REFERENCES usuarios(id),
    
    foreign key (idTipoIdentificacion) References tipoIdentificacion(id)
    
);
-- drop table propietarios;
insert into propietarios(idTipoIdentificacion, nombre, apellido, direccion, telefono, usuariocreacion)
values(2, 'Roberto', 'Pineda', 'Lima', '+51916730940', 1);

select * from propietarios;


create table Mascotas(
	id int primary key AUTO_INCREMENT,
    nombre varchar(50) not null,
    idEspecie int not null,
    idRaza int not null,
    idSexo int not null,
    idColor int not null, 
    edad decimal(5,2) null,
    idPropietario int not null,
    activo bit default 1,
    usuarioCreacion int not null,
    fechacreacion   TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP,
    usuarioModificacion int null,
    fechamodificacion  TIMESTAMP null,
    FOREIGN KEY (usuarioCreacion) REFERENCES usuarios(id),
    FOREIGN KEY (usuarioModificacion) REFERENCES usuarios(id),
    FOREIGN KEY (idEspecie) REFERENCES especies(id),
	FOREIGN KEY (idRaza) REFERENCES razas(id),
    FOREIGN KEY (idSexo) REFERENCES sexo(id),
    FOREIGN KEY (idColor) REFERENCES color(id),
    FOREIGN KEY (idPropietario) REFERENCES propietarios(id)
);

insert into mascotas(nombre, idEspecie, idRaza, idColor, idSexo,idPropietario,usuarioCreacion )
values('Pancho', 1, 1,1,1,1,1);

select * from mascotas;

update mascotas set edad = 2.5, usuarioModificacion = 1, fechaModificacion = now() where id =1;


create table MascotaVacunas(
	idMascota int not null,
    idVacuna int not null,
    activo bit default 1,
    usuarioCreacion int not null,
    fechacreacion   TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP,
    usuarioModificacion int null,
    fechamodificacion  TIMESTAMP null,
    FOREIGN KEY (usuarioCreacion) REFERENCES usuarios(id),
    FOREIGN KEY (usuarioModificacion) REFERENCES usuarios(id),
    PRIMARY KEY (idMascota, idVacuna),
    FOREIGN KEY (idMascota) REFERENCES mascotas(id),
    FOREIGN KEY (idVacuna) REFERENCES vacunas(id)
)
;

insert into MascotaVacunas(idMascota, IdVacuna, usuarioCreacion)
values(1, 1,1),
(1,2,1);

select * from MascotaVacunas;