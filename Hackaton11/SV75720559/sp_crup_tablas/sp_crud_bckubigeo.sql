CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_crud_bckubigeo`(
  in opcion int,
  in ubigeo  varchar(6) ,
  in ubicacion varchar(255),
  in activo bool ,
  in usuarioCreacion int ,
  in fechaCreacion datetime,
  in usuarioModificacion int,
  in fechaModificacion datetime
)
BEGIN
	IF opcion = 1 THEN
		select * from bckubigeo where activo = 1;
	elseif opcion = 2 then
        insert into bckubigeo(ubigeo,ubicacion,activo,usuarioCreacion,fechaCreacion,usuarioModificacion,fechaModificacion) 
        values (ubigeo,ubicacion,activo,usuarioCreacion,current_timestamp,usuarioModificacion,fechaModificacion);
    elseif opcion = 3 then
        update bckubigeo set 
            ubicacion = IFNULL(ubicacion, ubicacion),
            activo = IFNULL(activo, activo),
            usuarioModificacion = IFNULL(usuarioModificacion, usuarioModificacion),
            fechaModificacion = IFNULL(fechaModificacion, current_timestamp)
        WHERE bckubigeo.ubigeo = ubigeo;
    elseif opcion = 4 then
        update bckubigeo set
            activo = 0,
            usuarioModificacion = IFNULL(usuarioModificacion, usuarioModificacion),
            fechaModificacion = IFNULL(fechaModificacion, current_timestamp)
        where bckubigeo.ubigeo = ubigeo;
    elseif opcion = 5 then
        select * from bckubigeo where activo = 1 and bckubigeo.ubigeo = ubigeo;
	elseif opcion = 6 then
		delete from bckubigeo where ubigeo = ubigeo;
    END IF;
END