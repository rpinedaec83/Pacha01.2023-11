--Especie
call sp_crud_especie(1,null,null,null,null); 
call sp_crud_especie(2,'Gato',null,null,1);
call sp_crud_especie(3,'Perro',null,4,1);
call sp_crud_especie(4,null,null,4,1);
call sp_crud_especie(5,null,null,7,1);

--Mascota
CALL sp_crud_mascota(1, null, null, null, null, null, null, null, null, null);
CALL sp_crud_mascota(2, 'Boby', '2022-02-01', 1, 1, 1, 1, true, null, 1);
CALL sp_crud_mascota(3, 'Luna', '2022-02-15', 2, 2, 2, 1, true, 4, 1);
CALL sp_crud_mascota(4, null, null, null, null, null, null, null, 5, 1);
CALL sp_crud_mascota(5, null, null, null, null, null, null, null, 2, 1);

--Nacionalidad
CALL sp_crud_nacionalidad(1, null, null, null, null);
CALL sp_crud_nacionalidad(2, 'Chileno', true, null, 1);
CALL sp_crud_nacionalidad(3, 'Peruano', true, 4, 1);
CALL sp_crud_nacionalidad(4, null, null, 4, 1);
CALL sp_crud_nacionalidad(5, null, null, 1, 1);

--Propietario
CALL sp_crud_propietario(1, null, null, null, null, null, null, null, null, null);
CALL sp_crud_propietario(2, 'Gabriel', 'Guillen', 'Calle 1', '92998381', 1, '12123', true, null, 1);
CALL sp_crud_propietario(3, 'Carlos', 'Sanchez', 'Tanta', '12349883', 2, '11232', true, 12, 1);
CALL sp_crud_propietario(4, null, null, null, null, null, null, null, 12, 1);
CALL sp_crud_propietario(5, null, null, null, null, null, null, null, 2, 1);

--Raza
CALL sp_crud_raza(1, null, null, null, null);
CALL sp_crud_raza(2, 'Pequinez', true, null, 1);
CALL sp_crud_raza(3, 'Pitbull', true, 4, 1);
CALL sp_crud_raza(4, null, null, 4, 1);
CALL sp_crud_raza(5, null, null, 2, 1);

--Sexo
CALL sp_crud_sexo(1, null, null, null, null);
CALL sp_crud_sexo(2, 'Macho', true, null, 1);
CALL sp_crud_sexo(3, 'Hembra', true, 3, 1);
CALL sp_crud_sexo(4, null, null, 3, 1);
CALL sp_crud_sexo(5, null, null, 1, 1);

--Ubigeo
CALL sp_crud_ubigeo(1, null, null, null, null, null);
CALL sp_crud_ubigeo(2, '1', 'Lima', true, null, 1);
CALL sp_crud_ubigeo(3, '1', 'Callao', true, 1, 1);
CALL sp_crud_ubigeo(4, 1, null, null, null, 1);
CALL sp_crud_ubigeo(5, 110832, null, null, null, 2);

--Usuario
CALL sp_crud_usuario(1, null, null, null, null, null, null, null, null, null, 1);
CALL sp_crud_usuario(2, 'jezzi', 'jezzig@gmail.com', 'jezzi', 'Roe', 0, '1987-03-01', 32, true, null, 1);
CALL sp_crud_usuario(3, 'ash', 'ash@gmail.com', 'Jane', 'Smith', 1, '1985-02-10', 36, true, 1, 1);
CALL sp_crud_usuario(4, null, null, null, null, null, null, null, null, 4, 1);
CALL sp_crud_usuario(5, null, null, null, null, null, null, null, null, null, 2);

--Vacuna
CALL sp_crud_vacunas(1, null, null, null, null);
CALL sp_crud_vacunas(2, 'Vacuna1', true, null, 1);
CALL sp_crud_vacunas(3, 'Vacuna2', true, 8, 1);
CALL sp_crud_vacunas(4, null, null, 9, 1);
CALL sp_crud_vacunas(5, null, null, 3, null);

