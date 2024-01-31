create database Semana09Sesion02;
/*drop database Semana09sesion02;*/
use Semana09Sesion02;


create table usuarios(
	id int primary key auto_increment,
    username varchar(50) not null unique,
    password varchar(100) not null,
    email varchar(50) not null unique,
    activo bit default 0,
    usuarioCreacion int not null,
    fechaCreacion timestamp not null default current_timestamp,
    usuarioModificacion int  null,
    fechaModificacion timestamp null,
    foreign key (usuarioCreacion) references usuarios(id),
    foreign key (usuarioModificacion) references usuarios(id)
);

insert into usuarios (username , password , email , usuarioCreacion) values 
('pinead','12345','pineda@email.com',1);

select * from usuarios;



-- SEGUNDA PARTE
create table propietario(
    id int primary key  auto_increment,
    idTipoIdentificacion int not null,
    nombre varchar(50) not null,
    apellido varchar(50) not null,
    direccion varchar(255) not null,
    telefono varchar(15) not null,
	activo bit default 1,
    usuarioCreacion int not null,
    fechaCreacion timestamp not null default current_timestamp,
    usuarioModificacion int  null,
    fechaModificacion timestamp null,
    foreign key (usuarioCreacion) references usuarios(id),
    foreign key (usuarioModificacion) references usuarios(id),
    foreign key (idTipoIdentificacion) references tipoIdentificacion(id)
);

-- drop table especies;

insert into propietario(idTipoIdentificacion, nombre , apellido , direccion , telefono ,usuarioCreacion) values
(1, 'Giova','Quispe','Lima','987654321',1);

update especies set detalle = 'Gatito' , usuarioModificacion = 1 , fechaModificacion = now()
where id = 1;

select * from propietario;

create table Mascotas(
	id int primary key auto_increment,
    nombre varchar(50) not null,
    idEspecie int not null,
    idRaza int not null,
    idSexo int not null,
    idColor int not null,
    edad decimal(5,2)  null,
    idPropietario int not null,
    activo bit default 1,
    usuarioCreacion int not null,
    fechaCreacion timestamp not null default current_timestamp,
    usuarioModificacion int  null,
    fechaModificacion timestamp null,
    foreign key (usuarioCreacion) references usuarios(id),
    foreign key (usuarioModificacion) references usuarios(id),
    foreign key (idEspecie) references especies(id),
    foreign key (idRaza) references razas(id),
    foreign key (idSexo) references sexo(id),
    foreign key (idColor) references color(id),
    foreign key (idPropietario) references propietario(id)
    );
    
  --  drop table Mascotas;
    
    insert into Mascotas(nombre , idEspecie , idRaza , idColor , idSexo , idPropietario , usuarioCreacion) values
    ('Pancho',1,1,1,1,1,1);


select * from mascotas;

update mascotas  set 
edad = 2.5 ,
usuarioModificacion = 1 ,
fechaModificacion = now()
where id = 1;


create table MascotaVacunas(
	idMascota int not null,
    idVacuna int not null,
	activo bit default 1,
    usuarioCreacion int not null,
    fechaCreacion timestamp not null default current_timestamp,
    usuarioModificacion int  null,
    fechaModificacion timestamp null,
    foreign key (usuarioCreacion) references usuarios(id),
    foreign key (usuarioModificacion) references usuarios(id),
    primary key (idMascota , idVacuna),
	foreign key (idMascota) references Mascotas(id),
	foreign key (idVacuna) references vacunas(id)
);


insert into MascotaVacunas (idMascota , idVacuna , usuarioCreacion) values
(1 , 1 , 1),
(1 , 2 , 1);

select * from MascotaVacunas;


update  usuarios set 
activo = 1 ,
usuarioModificacion = 1 ,
fechaModificacion = now()
where id = 1;