/*
call sp_crud_ubigeo(1,null,null,null,null,null); /* ver tabla*/
call sp_crud_ubigeo(2,'12389','SAN ISIDRO',null,null,1);/* (INSERT)insertar nuevo dato a la tabla*/
call sp_crud_ubigeo(3,'12389','SAN JUAN DE LURIGANCHO',null,9,1);/*cambiar datos de tabla */
call sp_crud_ubigeo(4,'1238',null,null,9,1);/* borrar datos de la tabla*/
call sp_crud_ubigeo(5,'140114',null,null,7,1);/* saber dato de 1 documento o registro*/
*/
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_crud_ubigeo`(
	IN opcion INT, 
    IN ubigeoInput varchar(6),
    IN descrip varchar(255),
    in act bool,
    in id int,
    IN usuario int)
BEGIN
	IF opcion = 1 THEN
		select * from ubigeo where activo = 1;
	elseif opcion = 2 then
		insert into ubigeo(ubigeo, ubicacion, usuariocreacion)
        values(ubigeoInput,descrip, usuario);
	elseif opcion = 3 then
		update ubigeo set
        ubicacion = ifnull(descrip,descrip),
        activo = ifnull(act, activo),
        usuarioModificacion = usuario,
        fechaModificacion = current_timestamp
        where ubigeo.ubigeo = ubigeoInput;
	elseif opcion = 4 then
		update ubigeo  set
        activo = 0,
        usuarioModificacion = usuario,
        fechaModificacion = current_timestamp
        where ubigeo.ubigeo =ubigeoInput;
	elseif opcion = 5 then
		select * from ubigeo where activo = 1 and ubigeo.ubigeo = ubigeoInput;
	END IF;
END //
DELIMITER ;

