CREATE PROCEDURE `sp_crud_nacionalidad`(
    IN _opcion INT, 
    IN _nombre VARCHAR(255),
    IN _activo BOOL,
    IN _id INT,
    IN _usuario INT
)
BEGIN
    IF _opcion = 1 THEN
        SELECT * FROM nacionalidad WHERE activo = 1;
    ELSEIF _opcion = 2 THEN
        INSERT INTO nacionalidad(nombre, activo, fechaCreacion)
        VALUES (_nombre, 1, CURRENT_TIMESTAMP);
    ELSEIF _opcion = 3 THEN
        UPDATE nacionalidad SET
            nombre = IFNULL(_nombre, nombre),
            activo = IFNULL(_activo, activo),
            fechaModificacion = CURRENT_TIMESTAMP
        WHERE id = _id;
    ELSEIF _opcion = 4 THEN
        UPDATE nacionalidad SET
            activo = 0,
            fechaModificacion = CURRENT_TIMESTAMP
        WHERE id = _id;
    ELSEIF _opcion = 5 THEN
        SELECT * FROM nacionalidad WHERE activo = 1 AND id = _id;
    END IF;
END$$