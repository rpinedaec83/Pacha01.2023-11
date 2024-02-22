/*
call sp_crud_sexo(1,null,null,null,null); /* ver tabla*/
call sp_crud_sexo(2,'Cabra',null,null,1);/* (INSERT)insertar nuevo dato a la tabla*/
call sp_crud_sexo(3,'Borrego',null,9,1);/*cambiar datos de tabla */
call sp_crud_sexo(4,null,null,9,1);/* borrar datos de la tabla*/
call sp_crud_sexo(5,null,null,7,1);/* saber dato de 1 documento o registro*/
*/
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_crud_sexo`(
	IN opcion INT, 
    IN descrip varchar(255),
    in act bool,
    in id int,
    IN usuario int)
BEGIN
	IF opcion = 1 THEN
		select * from sexo where activo = 1;
	elseif opcion = 2 then
		insert into sexo(descripcion, usuariocreacion)
        values(descrip, usuario);
	elseif opcion = 3 then
		update sexo set
        descripcion = ifnull(descrip,descripcion),
        activo = ifnull(act, activo),
        usuarioModificacion = usuario,
        fechaModificacion = current_timestamp
        where sexo.id = id;
	elseif opcion = 4 then
		update sexo  set
        activo = 0,
        usuarioModificacion = usuario,
        fechaModificacion = current_timestamp
        where sexo.id = id;
	elseif opcion = 5 then
		select * from sexo where activo = 1 and sexo.id = id;
	END IF;
END //
DELIMITER ;