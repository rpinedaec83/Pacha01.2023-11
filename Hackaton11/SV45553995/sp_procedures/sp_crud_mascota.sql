/*call sp_crud_mascota(1,null,null,null,null); /* ver tabla*/
call sp_crud_mascota(2,'Cabra',null,null,1);/* (INSERT)insertar nuevo dato a la tabla*/
call sp_crud_mascota(3,'Borrego',null,9,1);/*cambiar datos de tabla */
call sp_crud_mascota(4,null,null,9,1);/* borrar datos de la tabla*/
 call sp_crud_mascota(5,null,null,7,1);/* saber dato de 1 documento o registro*/
*/
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_crud_mascota`(
	IN opcion INT, 
    in act bool,
    in idInput int,
    IN usuarioInput int,
    in nombreInput varchar(255),
    in fechaNacimientoInput date,
    in idEspecieInput  int,
    in idRazaInput int,
    in sexoInput  int,
    in idpropietarioInput int
    )
BEGIN
	IF opcion = 1 THEN
		select * from mascota where activo = 1;
	elseif opcion = 2 then
		insert into mascota(nombre,fechaNacimiento,idEspecie,idRaza,idsexo,idpropietario,
        usuariocreacion)
        values(nombreInput,fechaNacimientoInput,idEspecieInput,idRazainput,sexoInput,
        idpropietarioinput, usuarioInput);
	elseif opcion = 3 then
		update mascota set
        Nombre = ifnull(nombreInput,Nombre),
        fechaNacimiento = ifnull(fechaNacimientoInput,fechaNacimiento),
        idEspecie = ifnull(idEspecieInput,idEspecie),
        idRaza= ifnull(idRazainput,idRaza),
        idsexo= ifnull(sexoInput,idsexo),
        idpropietario= ifnull(idpropietarioinput,idpropietario),
        usuarioModificacion= ifnull(usuarioInput,usuarioModificacion),
        fechaModificacion =current_timestamp
        where mascota.id = idInput;
	elseif opcion = 4 then
		update mascota  set
        activo = 0,
        usuarioModificacion = usuarioInput,
        fechaModificacion = current_timestamp
        where mascota.id = idInput;
	elseif opcion = 5 then
		select * from mascota where activo = 1 and mascota.id = idInput;
	END IF;
END //
DELIMITER ;