CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_crud_mascota`(
    IN _opcion INT, 
    IN _nombre VARCHAR(255),
    IN _especie_id INT,
    IN _dueño_id INT,
    IN _activo BOOL,
    IN _id INT,
    IN _usuario INT
)
BEGIN
    IF _opcion = 1 THEN
        SELECT * FROM mascota WHERE activo = 1;
    ELSEIF _opcion = 2 THEN
        INSERT INTO mascota(nombre, especie_id, dueño_id, activo, usuarioCreacion, fechaCreacion)
        VALUES (_nombre, _especie_id, _dueño_id, 1, _usuario, CURRENT_TIMESTAMP);
    ELSEIF _opcion = 3 THEN
        UPDATE mascota SET
            nombre = IFNULL(_nombre, nombre),
            especie_id = IFNULL(_especie_id, especie_id),
            dueño_id = IFNULL(_dueño_id, dueño_id),
            activo = IFNULL(_activo, activo),
            usuarioModificacion = _usuario,
            fechaModificacion = CURRENT_TIMESTAMP
        WHERE id = _id;
    ELSEIF _opcion = 4 THEN
        UPDATE mascota SET
            activo = 0,
            usuarioModificacion = _usuario,
            fechaModificacion = CURRENT_TIMESTAMP
        WHERE id = _id;
    ELSEIF _opcion = 5 THEN
        SELECT * FROM mascota WHERE activo = 1 AND id = _id;
    END IF;
END
