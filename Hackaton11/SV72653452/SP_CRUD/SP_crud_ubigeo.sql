DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_crud_ubigeo`(
    IN opcion INT, 
    IN ubigeo varchar(10),
    IN ubicacion varchar(255),
    IN act bool,
    IN id int,
    IN usuario int)
BEGIN
    IF opcion = 1 THEN
        SELECT * FROM Ubigeo WHERE activo = 1;
    ELSEIF opcion = 2 THEN
        INSERT INTO Ubigeo(ubigeo, ubicacion, activo, usuariocreacion)
        VALUES(ubigeo, ubicacion, act, usuario);
    ELSEIF opcion = 3 THEN
        UPDATE Ubigeo SET
        ubicacion = IFNULL(ubicacion, ubicacion),
        activo = IFNULL(act, activo),
        usuarioModificacion = usuario,
        fechaModificacion = CURRENT_TIMESTAMP
        WHERE Ubigeo.ubigeo = ubigeo;
    ELSEIF opcion = 4 THEN
        UPDATE Ubigeo SET
        activo = 0,
        usuarioModificacion = usuario,
        fechaModificacion = CURRENT_TIMESTAMP
        WHERE Ubigeo.ubigeo = ubigeo;
    ELSEIF opcion = 5 THEN
        SELECT * FROM Ubigeo WHERE activo = 1 AND Ubigeo.ubigeo = ubigeo;
    END IF;
END //
DELIMITER ;
