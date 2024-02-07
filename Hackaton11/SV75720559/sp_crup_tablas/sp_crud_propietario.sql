CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_crud_propietario`(
    IN opcion INT, 
    IN Nombre varchar(255),
    IN Apellido varchar(255),
    IN Direccion varchar(255),
    IN Telefono varchar(20),
    IN idNacionalidad int,
    IN ubigeo varchar(10),
    IN act bool,
    IN id int,
    IN usuario int)
BEGIN
    IF opcion = 1 THEN
        SELECT * FROM Propietario WHERE activo = 1;
    ELSEIF opcion = 2 THEN
        INSERT INTO Propietario(Nombre, Apellido, Direccion, Telefono, idNacionalidad, ubigeo, activo, usuariocreacion)
        VALUES(Nombre, Apellido, Direccion, Telefono, idNacionalidad, ubigeo, act, usuario);
    ELSEIF opcion = 3 THEN
        UPDATE Propietario SET
        Nombre = IFNULL(Nombre, Nombre),
        Apellido = IFNULL(Apellido, Apellido),
        Direccion = IFNULL(Direccion, Direccion),
        Telefono = IFNULL(Telefono, Telefono),
        idNacionalidad = IFNULL(idNacionalidad, idNacionalidad),
        ubigeo = IFNULL(ubigeo, ubigeo),
        activo = IFNULL(act, activo),
        usuarioModificacion = usuario,
        fechaModificacion = CURRENT_TIMESTAMP
        WHERE Propietario.id = id;
    ELSEIF opcion = 4 THEN
        DELETE FROM Propietario WHERE Propietario.id = id;
    END IF;
END