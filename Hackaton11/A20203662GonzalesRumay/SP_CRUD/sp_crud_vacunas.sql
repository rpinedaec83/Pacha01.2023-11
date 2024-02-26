CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_crud_vacunas`(
    IN _opcion INT, 
    IN _descripcion VARCHAR(255),
    IN _activo BOOL,
    IN _id INT,
    IN _usuario INT
)
BEGIN
    IF _opcion = 1 THEN
        SELECT * FROM vacunas WHERE activo = 1;
    ELSEIF _opcion = 2 THEN
        INSERT INTO vacunas(descripcion, activo, usuarioCreacion, fechaCreacion)
        VALUES (_descripcion, _activo, _usuario, CURRENT_TIMESTAMP);
    ELSEIF _opcion = 3 THEN
        UPDATE vacunas SET
            descripcion = IFNULL(_descripcion, descripcion),
            activo = IFNULL(_activo, activo),
            usuarioModificacion = _usuario,
            fechaModificacion = CURRENT_TIMESTAMP
        WHERE id = _id;
    ELSEIF _opcion = 4 THEN
        UPDATE vacunas SET
            activo = 0,
            usuarioModificacion = _usuario,
            fechaModificacion = CURRENT_TIMESTAMP
        WHERE id = _id;
    ELSEIF _opcion = 5 THEN
        SELECT * FROM vacunas WHERE activo = 1 AND id = _id;
    END IF;
END$$

