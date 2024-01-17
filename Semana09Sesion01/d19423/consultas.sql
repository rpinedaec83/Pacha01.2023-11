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
