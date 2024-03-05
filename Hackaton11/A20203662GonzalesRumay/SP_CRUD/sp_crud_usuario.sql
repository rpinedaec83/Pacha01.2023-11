CREATE PROCEDURE `sp_crud_usuario`(
    IN _opcion INT, 
    IN _nombre VARCHAR(255),
    IN _email VARCHAR(255),
    IN _activo BOOL,
    IN _id INT,
    IN _usuario INT
)
BEGIN
    IF _opcion = 1 THEN
        SELECT * FROM usuario WHERE activo = 1;
    ELSEIF _opcion = 2 THEN
        INSERT INTO usuario(nombre, email, activo, fechaCreacion)
        VALUES (_nombre, _email, 1, CURRENT_TIMESTAMP);
    ELSEIF _opcion = 3 THEN
        UPDATE usuario SET
            nombre = IFNULL(_nombre, nombre),
            email = IFNULL(_email, email),
            activo = IFNULL(_activo, activo),
            fechaModificacion = CURRENT_TIMESTAMP
        WHERE id = _id;
    ELSEIF _opcion = 4 THEN
        UPDATE usuario SET
            activo = 0,
            fechaModificacion = CURRENT_TIMESTAMP
        WHERE id = _id;
    ELSEIF _opcion = 5 THEN
        SELECT * FROM usuario WHERE activo = 1 AND id = _id;
    END IF;
END