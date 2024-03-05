CREATE PROCEDURE `sp_crud_sexo`(
    IN _opcion INT, 
    IN _descripcion VARCHAR(255),
    IN _activo BOOL,
    IN _id INT,
    IN _usuario INT
)
BEGIN
    IF _opcion = 1 THEN
        SELECT * FROM sexo WHERE activo = 1;
    ELSEIF _opcion = 2 THEN
        INSERT INTO sexo(descripcion, activo, fechaCreacion)
        VALUES (_descripcion, 1, CURRENT_TIMESTAMP);
    ELSEIF _opcion = 3 THEN
        UPDATE sexo SET
            descripcion = IFNULL(_descripcion, descripcion),
            activo = IFNULL(_activo, activo),
            fechaModificacion = CURRENT_TIMESTAMP
        WHERE id = _id;
    ELSEIF _opcion = 4 THEN
        UPDATE sexo SET
            activo = 0,
            fechaModificacion = CURRENT_TIMESTAMP
        WHERE id = _id;
    ELSEIF _opcion = 5 THEN
        SELECT * FROM sexo WHERE activo = 1 AND id = _id;
    END IF;
END