CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_crud_ubigeo`(
	IN _opcion INT,
    IN _ubigeo VARCHAR(6),
    IN _ubicacion VARCHAR(255),
    IN _activo BOOL,
    IN _id INT,
    IN _usuario INT
)
BEGIN
	IF _opcion = 1 THEN
		SELECT * FROM ubigeo WHERE activo = 1;
	ELSEIF _opcion = 2 THEN
		INSERT INTO ubigeo(ubigeo, ubicacion, activo, usuarioCreacion, fechaCreacion)
        VALUES (_ubigeo, _ubicacion, 1, _usuario, CURRENT_TIMESTAMP);
	ELSEIF _opcion = 3 THEN
		UPDATE ubigeo SET
        ubicacion = IFNULL(_ubicacion, ubicacion),
        activo = IFNULL(_activo, activo),
        usuarioModificacion = _usuario,
        fechaModificacion = CURRENT_TIMESTAMP
        WHERE id = _id;
	ELSEIF _opcion = 4 THEN
		UPDATE ubigeo SET
        activo = 0,
        usuarioModificacion = _usuario,
        fechaModificacion = CURRENT_TIMESTAMP
        WHERE id = _id;
	ELSEIF _opcion = 5 THEN
		SELECT * FROM ubigeo WHERE activo = 1 AND id = _id;
	END IF;
END
