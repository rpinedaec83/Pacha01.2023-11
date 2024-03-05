DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_crud_mascota`(
    IN opcion INT, 
    IN nombre varchar(255),
    IN fechaNacimiento DATE,
    IN idEspecie int,
    IN idRaza int,
    IN idSexo int,
    IN idPropietario int,
    IN act bool,
    IN id int,
    IN usuario int)
BEGIN
    IF opcion = 1 THEN
        SELECT * FROM Mascota WHERE activo = 1;
    ELSEIF opcion = 2 THEN
        INSERT INTO Mascota(nombre, fechaNacimiento, idEspecie, idRaza, idSexo, idPropietario, activo, usuariocreacion)
        VALUES(nombre, fechaNacimiento, idEspecie, idRaza, idSexo, idPropietario, act, usuario);
    ELSEIF opcion = 3 THEN
        UPDATE Mascota SET
        nombre = IFNULL(nombre, nombre),
        fechaNacimiento = IFNULL(fechaNacimiento, fechaNacimiento),
        idEspecie = IFNULL(idEspecie, idEspecie),
        idRaza = IFNULL(idRaza, idRaza),
        idSexo = IFNULL(idSexo, idSexo),
        idPropietario = IFNULL(idPropietario, idPropietario),
        activo = IFNULL(act, activo),
        usuarioModificacion = usuario,
        fechaModificacion = CURRENT_TIMESTAMP
        WHERE Mascota.id = id;
    ELSEIF opcion = 4 THEN
        UPDATE Mascota SET
        activo = 0,
        usuarioModificacion = usuario,
        fechaModificacion = CURRENT_TIMESTAMP
        WHERE Mascota.id = id;
    ELSEIF opcion = 5 THEN
        SELECT * FROM Mascota WHERE activo = 1 AND Mascota.id = id;
    END IF;
END //
DELIMITER ;
