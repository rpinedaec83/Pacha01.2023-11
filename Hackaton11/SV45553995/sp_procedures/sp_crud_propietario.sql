/*
call sp_crud_propietario(1,null,null,null,null,null); /* ver tabla*/
call sp_crud_propietario(2,'12389','SAN ISIDRO',null,null,1);/* (INSERT)insertar nuevo dato a la tabla*/
call sp_crud_propietario(3,'12389','SAN JUAN DE LURIGANCHO',null,9,1);/*cambiar datos de tabla */
call sp_crud_propietario(4,'1238',null,null,9,1);/* borrar datos de la tabla*/
call sp_crud_propietario(5,'140114',null,null,7,1);/* saber dato de 1 documento o registro*/
*/
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_crud_propietario`(
	IN opcion varchar(255), 
	IN nombreInput varchar(255),
    IN apellidoInput varchar(255),
    IN direccionInput varchar(255),
    in telefonoInput varchar(255),
    in idNacionalidadInput int,
    in ubigeoInput varchar(6),
    in id int,
    IN usuario int)
BEGIN
	IF opcion = 1 THEN
		select * from propietario where activo = 1;
	elseif opcion = 2 then
		insert into propietario(Nombre,Apellido,Direccion,Telefono,idNacionalidad,
        ubigeo, usuarioCreacion)
        values(nombreInput,apellidoInput,direccionInput,telefonoInput,
        idNacionalidadInput,ubigeoInput,usuario);
	elseif opcion = 3 then
		update propietario set
        nombre = ifnull(nombreInput,nombre),
        apellido = ifnull(apellidoInput,apellido),
        direccion = ifnull(direccionInput,direccion),
        telefono = ifnull(telefonoInput,telefono),
        idNacionalidad = ifnull(idNacionalidadInput,idNacionalidad),
        ubigeo = ifnull(ubigeoInput,ubigeo),
        usuarioModificacion = usuario,
        fechaModificacion = current_timestamp
        where propietario.id = id;
	elseif opcion = 4 then
		update propietario  set
        activo = 0,
        usuarioModificacion = usuario,
        fechaModificacion = current_timestamp
        where propietario.id = id;
	elseif opcion = 5 then
		select * from propietario where activo = 1 and propietario.id = id;
	END IF;
END //
DELIMITER ;

