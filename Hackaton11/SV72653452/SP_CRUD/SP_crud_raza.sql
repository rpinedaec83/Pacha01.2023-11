DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_crud_raza`(
    IN opcion INT, 
    IN descripcion varchar(255),
    IN act bool,
    IN id int,
    IN usuario int)
BEGIN
    IF opcion = 1 THEN
        SELECT * FROM Raza WHERE activo = 1;
    ELSEIF opcion = 2 THEN
        INSERT INTO Raza(descripcion, activo, usuariocreacion)
        VALUES(descripcion, act, usuario);
    ELSEIF opcion = 3 THEN
        UPDATE Raza SET
        descripcion = IFNULL(descripcion, descripcion),
        activo = IFNULL(act, activo),
        usuarioModificacion = usuario,
        fechaModificacion = CURRENT_TIMESTAMP
        WHERE Raza.id = id;
    ELSEIF opcion = 4 THEN
        UPDATE Raza SET
        activo = 0,
        usuarioModificacion = usuario,
        fechaModificacion = CURRENT_TIMESTAMP
        WHERE Raza.id = id;
    ELSEIF opcion = 5 THEN
        SELECT * FROM Raza WHERE activo = 1 AND Raza.id = id;
    END IF;
END //
DELIMITER ;
