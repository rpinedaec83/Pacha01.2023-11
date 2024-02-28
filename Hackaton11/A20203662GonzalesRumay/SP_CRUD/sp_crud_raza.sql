CREATE PROCEDURE `sp_crud_raza`(
    IN _opcion INT, 
    IN _nombre VARCHAR(255),
    IN _especie_id INT,
    IN _descripcion TEXT,
    IN _activo BOOL,
    IN _id INT,
    IN _usuario INT
)
BEGIN
    IF _opcion = 1 THEN
        SELECT * FROM raza WHERE activo = 1;
    ELSEIF _opcion = 2 THEN
        INSERT INTO raza(nombre, especie_id, descripcion, activo, fechaCreacion)
        VALUES (_nombre, _especie_id, _descripcion, 1, CURRENT_TIMESTAMP);
    ELSEIF _opcion = 3 THEN
        UPDATE raza SET
            nombre = IFNULL(_nombre, nombre),
            especie_id = IFNULL(_especie_id, especie_id),
            descripcion = IFNULL(_descripcion, descripcion),
            activo = IFNULL(_activo, activo),
            fechaModificacion = CURRENT_TIMESTAMP
        WHERE id = _id;
    ELSEIF _opcion = 4 THEN
        UPDATE raza SET
            activo = 0,
            fechaModificacion = CURRENT_TIMESTAMP
        WHERE id = _id;
    ELSEIF _opcion = 5 THEN
        SELECT * FROM raza WHERE activo = 1 AND id = _id;
    END IF;
END