/*call sp_crud_usuario(1,null,null,null,null); /* ver tabla*/
call sp_crud_usuario(2,'Cabra',null,null,1);/* (INSERT)insertar nuevo dato a la tabla*/
call sp_crud_usuario(3,'Borrego',null,9,1);/*cambiar datos de tabla */
call sp_crud_usuario(4,null,null,9,1);/* borrar datos de la tabla*/
call sp_crud_usuario(5,null,null,7,1);/* saber dato de 1 documento o registro*/
*/


DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_crud_usuario`(
	IN opcion INT, 
    IN usernameInput varchar(255),
    In emailInput varchar(255),
    In nombreInput varchar(500),
    In apellidoInput varchar(500),
    In estadocivilInput Int,
    In fechaNacimientoInput  date,
    In edadInput Int,
    In act bool,
    In id int,
    IN usuario int)

BEGIN
	IF opcion = 1 THEN
		select * from usuario where activo = 1;
	elseif opcion = 2 then
		insert into usuario(username,email,nombre,apellido,estadoCivil,
        fechaNacimiento,edad,usuarioCreacion, activo)
        values(usernameInput,emailInput,nombreInput,apellidoInput,
        estadocivilInput,fechaNacimientoInput,edadInput,usuario,act);
	elseif opcion = 3 then
		update usuario set
        username = ifnull(usernameInput,username),
        email = ifnull(emailInput,email),
        nombre = ifnull(nombreInput,nombre),
        apellido = ifnull(apellidoInput,apellido),
        estadoCivil=ifnull (estadoCivilInput,estadoCivil),
        fechaNacimiento=ifnull (fechaNacimientoInput,fechaNacimiento),
        edad=ifnull (edadInput,edad),
        activo = ifnull(act, activo),
        usuarioModificacion = usuario,
        fechaModificacion = current_timestamp
        where usuario.id = id;
	elseif opcion = 4 then
		update usuario  set
        activo = 0,
        usuarioModificacion = usuario,
        fechaModificacion = current_timestamp
        where usuario.id = id;
	elseif opcion = 5 then
		select * from usuario where activo = 1 and usuario.id = id;
	END IF;
END //
DELIMITER ;