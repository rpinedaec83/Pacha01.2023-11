CREATE PROCEDURE `sp_crud_propietario`(
    IN _opcion INT, 
    IN _nombre VARCHAR(255),
    IN _direccion VARCHAR(255),
    IN _telefono VARCHAR(20),
    IN _email VARCHAR(255),
    IN _activo BOOL,
    IN _id INT,
    IN _usuario INT
)
BEGIN
    IF _opcion = 1 THEN
        SELECT * FROM propietario WHERE activo = 1;
    ELSEIF _opcion = 2 THEN
        INSERT INTO propietario(nombre, direccion, telefono, email, activo, fechaCreacion)
        VALUES (_nombre, _direccion, _telefono, _email, 1, CURRENT_TIMESTAMP);
    ELSEIF _opcion = 3 THEN
        UPDATE propietario SET
            nombre = IFNULL(_nombre, nombre),
            direccion = IFNULL(_direccion, direccion),
            telefono = IFNULL(_telefono, telefono),
            email = IFNULL(_email, email),
            activo = IFNULL(_activo, activo),
            fechaModificacion = CURRENT_TIMESTAMP
        WHERE id = _id;
    ELSEIF _opcion = 4 THEN
        UPDATE propietario SET
            activo = 0,
            fechaModificacion = CURRENT_TIMESTAMP
        WHERE id = _id;
    ELSEIF _opcion = 5 THEN
        SELECT * FROM propietario WHERE activo = 1 AND id = _id;
    END IF;
END