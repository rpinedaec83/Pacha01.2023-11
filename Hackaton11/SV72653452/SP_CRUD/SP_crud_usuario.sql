DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_crud_usuario`(
    IN opcion INT, 
    IN username varchar(255),
    IN email varchar(255),
    IN nombre varchar(255),
    IN apellido varchar(255),
    IN estadoCivil varchar(255),
    IN fechaNacimiento date,
    IN edad int,
    IN act bool,
    IN id int,
    IN usuario int)
BEGIN
    DECLARE user_id INT;

    IF opcion = 1 THEN
        SELECT * FROM Usuario;
    ELSIF opcion = 2 THEN
        INSERT INTO Usuario(username, email, nombre, apellido, estadoCivil, fechaNacimiento, edad, activo, usuariocreacion)
        VALUES(username, email, nombre, apellido, estadoCivil, fechaNacimiento, edad, act, usuario);
    ELSIF opcion = 3 THEN
        UPDATE Usuario SET
        username = IFNULL(username, username),
        email = IFNULL(email, email),
        nombre = IFNULL(nombre, nombre),
        apellido = IFNULL(apellido, apellido),
        estadoCivil = IFNULL(estadoCivil, estadoCivil),
        fechaNacimiento = IFNULL(fechaNacimiento, fechaNacimiento),
        edad = IFNULL(edad, edad),
        activo = IFNULL(act, activo),
        usuarioModificacion = usuario,
        fechaModificacion = CURRENT_TIMESTAMP
        WHERE Usuario.id = id;
    ELSIF opcion = 4 THEN
        -- Verificar si el usuario existe
        SELECT id INTO user_id FROM Usuario WHERE id = id LIMIT 1;

        -- Mostrar el ID del usuario seleccionado
        SELECT user_id as 'User ID';

        -- Eliminar al usuario si existe
        IF user_id IS NOT NULL THEN
            DELETE FROM Usuario WHERE id = user_id;
            SELECT 'Usuario eliminado correctamente.' as 'Status';
        ELSE
            SELECT 'Usuario no encontrado.' as 'Status';
        END IF;
    ELSIF opcion = 5 THEN
        SELECT * FROM Usuario WHERE activo = 1 AND Usuario.id = id;
    END IF;
END //
DELIMITER ;
