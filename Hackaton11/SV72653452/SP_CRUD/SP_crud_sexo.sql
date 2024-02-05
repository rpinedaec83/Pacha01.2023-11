DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_crud_sexo`(
    IN opcion INT, 
    IN descripcion varchar(255),
    IN act bool,
    IN id int,
    IN usuario int)
BEGIN
    IF opcion = 1 THEN
        SELECT * FROM Sexo WHERE activo = 1;
    ELSEIF opcion = 2 THEN
        INSERT INTO Sexo(descripcion, activo, usuariocreacion)
        VALUES(descripcion, act, usuario);
    ELSEIF opcion = 3 THEN
        UPDATE Sexo SET
        descripcion = IFNULL(descripcion, descripcion),
        activo = IFNULL(act, activo),
        usuarioModificacion = usuario,
        fechaModificacion = CURRENT_TIMESTAMP
        WHERE Sexo.id = id;
    ELSEIF opcion = 4 THEN
        UPDATE Sexo SET
        activo = 0,
        usuarioModificacion = usuario,
        fechaModificacion = CURRENT_TIMESTAMP
        WHERE Sexo.id = id;
    ELSEIF opcion = 5 THEN
        SELECT * FROM Sexo WHERE activo = 1 AND Sexo.id = id;
    END IF;
END //
DELIMITER ;
