CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_crud_especie`(
	IN opcion INT, 
    IN descrip varchar(255),
    in act bool,
    in id int,
    IN usuario int)
BEGIN
	IF opcion = 1 THEN
		select * from Especie where activo = 1;
	elseif opcion = 2 then
		insert into Especie(descripcion, usuariocreacion)
        values(descrip, usuario);
	elseif opcion = 3 then
		update Especie set
        descripcion = ifnull(descrip,descripcion),
        activo = ifnull(act, activo),
        usuarioModificacion = usuario,
        fechaModificacion = current_timestamp
        where Especie.id = id;
	elseif opcion = 4 then
		update Especie set
        activo = 0,
        usuarioModificacion = usuario,
        fechaModificacion = current_timestamp
        where Especie.id = id;
	elseif opcion = 5 then
		select * from Especie where activo = 1 and Especie.id = id;
	END IF;
    
END