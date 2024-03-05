CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_crud_log_mascota`(
    in opcion int,
    in id int,
    in nombre varchar(255),
    in fechanacimiento date,
    in idespecie int,
    in idraza int,
    in idsexo int,
    in idpropietario int,
    in activo bool,
    in usuario int
)
BEGIN
 IF opcion = 1 THEN
        select * from Mascota where activo = 1;
    elseif opcion = 2 THEN
        insert into Mascota (id,Nombre, fechaNacimiento, idEspecie, idRaza, idSexo, idPropietario,usuarioCreacion)
        values (id, nombre, fechanacimiento, idespecie, idraza, idsexo, idpropietario,usuario);
    elseif opcion = 3 THEN
        UPDATE Mascota SET 
			id = IFNULL(id, Id),
            Nombre = IFNULL(nombre, Nombre),
            fechaNacimiento = IFNULL(fechanacimiento, fechaNacimiento),
            idEspecie = IFNULL(idespecie, idEspecie),
            idRaza = IFNULL(idraza, idRaza),
            idSexo = IFNULL(idsexo, idSexo),
            idPropietario = IFNULL(idpropietario, idPropietario),
            activo = IFNULL(activo, activo),
            usuarioModificacion = usuario,
            fechaModificacion = CURRENT_TIMESTAMP
        WHERE mascota.id = id;
    ELSEIF opcion = 4 THEN
        DELETE FROM Mascota WHERE mascota.id = id;
    END IF;
END