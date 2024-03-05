DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_crud_mascota` (
IN opcion INT,
IN nombreMascota varchar(255),
IN fechaNacimientoMascota date,
IN especie INT,
IN raza INT,
IN sexo INT,
IN propietario INT,
IN activoMascota tinyint,
IN idMascota int,
IN usuario INT
)
BEGIN
	IF opcion = 1 THEN #GetAll()
		select * from mascota where activo = 1;
	elseif opcion = 2 then #PostMascota(Mascota)
		insert into mascota(
        Nombre,
        fechaNacimiento,
        idEspecie,
        idRaza,
        idSexo,
        idPropietario,
        usuarioCreacion
        )
        values(
        nombreMascota,
        fechaNacimientoMascota,
        especie,
        raza,
        sexo,
        propietario,
        usuario
        );
	elseif opcion = 3 then #PutMascota(Mascota)
		update mascota set
        Nombre = ifnull(nombreMascota,Nombre),
        fechaNacimiento = ifnull(fechaNacimientoMascota,fechaNacimiento),
        idEspecie = ifnull(especie,idEspecie),
        idRaza = ifnull(raza,idRaza),
        idSexo = ifnull(sexo,idSexo),
        idPropietario = ifnull(propietario,idPropietario),
        activo = ifnull(activoMascota, activo),
        usuarioModificacion = usuario,
        fechaModificacion = current_timestamp
        where mascota.id = idMascota;
	elseif opcion = 4 then #DeleteMascota(idMascota)
		update mascota set
        activo = 0,
        usuarioModificacion = usuario,
        fechaModificacion = current_timestamp
        where mascota.id = idMascota;
	elseif opcion = 5 then
		select * from mascota where activo = 1 and mascota.id = idMascota;
	END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_crud_propietario` (
IN opcion INT,
IN nombrePropietario varchar(255),
IN apellidoPropietario varchar(255),
IN direccionPropietario varchar(1000),
IN telefonoPropietario varchar(50),
IN nacionalidad INT,
IN ubigeoPropietario varchar(6),
IN activoPropietario tinyint,
IN idPropietario int,
IN usuario INT
)
BEGIN
	IF opcion = 1 THEN #GetAll()
		select * from propietario where activo = 1;
	elseif opcion = 2 then #PostMascota(Mascota)
		insert into propietario(
        Nombre,
        Apellido,
        Direccion,
        Telefono,
        idNacionalidad,
        ubigeo,
        usuarioCreacion
        )
        values(
        nombrePropietario,
        apellidoPropietario,
        direccionPropietario,
        telefonoPropietario,
        nacionalidad,
        ubigeoPropietario,
        usuario
        );
	elseif opcion = 3 then #PutMascota(Mascota)
		update propietario set
        Nombre = ifnull(nombrePropietario,Nombre),
        Apellido = ifnull(apellidoPropietario,Apellido),
        Direccion = ifnull(direccionPropietario,Direccion),
        Telefono = ifnull(telefonoPropietario,Telefono),
        idNacionalidad = ifnull(nacionalidad,idNacionalidad),
        ubigeo = ifnull(ubigeoPropietario,ubigeo),
        activo = ifnull(activoPropietario, activo),
        usuarioModificacion = usuario,
        fechaModificacion = current_timestamp
        where propietario.id = idPropietario;
	elseif opcion = 4 then #DeleteMascota(idMascota)
		update propietario set
        activo = 0,
        usuarioModificacion = usuario,
        fechaModificacion = current_timestamp
        where propietario.id = idPropietario;
	elseif opcion = 5 then
		select * from propietario where activo = 1 and propietario.id = idPropietario;
	END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_crud_raza`(
	IN opcion INT, 
    IN descrip varchar(255),
    in act bool,
    in idRaza int,
    IN usuario int)
BEGIN
	IF opcion = 1 THEN
		select * from raza where activo = 1;
	elseif opcion = 2 then
		insert into raza(descripcion, usuariocreacion)
        values(descrip, usuario);
	elseif opcion = 3 then
		update raza set
        descripcion = ifnull(descrip,descripcion),
        activo = ifnull(act, activo),
        usuarioModificacion = usuario,
        fechaModificacion = current_timestamp
        where raza.id = idRaza;
	elseif opcion = 4 then
		update raza set
        activo = 0,
        usuarioModificacion = usuario,
        fechaModificacion = current_timestamp
        where raza.id = idRaza;
	elseif opcion = 5 then
		select * from raza where activo = 1 and raza.id = idRaza;
	END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_crud_sexo`(
	IN opcion INT, 
    IN descrip varchar(255),
    in act bool,
    in idSexo int,
    IN usuario int)
BEGIN
	IF opcion = 1 THEN
		select * from sexo where activo = 1;
	elseif opcion = 2 then
		insert into sexo(descripcion, usuariocreacion)
        values(descrip, usuario);
	elseif opcion = 3 then
		update sexo set
        descripcion = ifnull(descrip,descripcion),
        activo = ifnull(act, activo),
        usuarioModificacion = usuario,
        fechaModificacion = current_timestamp
        where sexo.id = idSexo;
	elseif opcion = 4 then
		update sexo set
        activo = 0,
        usuarioModificacion = usuario,
        fechaModificacion = current_timestamp
        where sexo.id = idSexo;
	elseif opcion = 5 then
		select * from sexo where activo = 1 and sexo.id = idSexo;
	END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_crud_nacionalidad`(
	IN opcion INT, 
    IN descrip varchar(255),
    in act bool,
    in idNacionalidad int,
    IN usuario int)
BEGIN
	IF opcion = 1 THEN
		select * from nacionalidad where activo = 1;
	elseif opcion = 2 then
		insert into nacionalidad(descripcion, usuariocreacion)
        values(descrip, usuario);
	elseif opcion = 3 then
		update nacionalidad set
        descripcion = ifnull(descrip,descripcion),
        activo = ifnull(act, activo),
        usuarioModificacion = usuario,
        fechaModificacion = current_timestamp
        where nacionalidad.id = idNacionalidad;
	elseif opcion = 4 then
		update nacionalidad set
        activo = 0,
        usuarioModificacion = usuario,
        fechaModificacion = current_timestamp
        where nacionalidad.id = idNacionalidad;
	elseif opcion = 5 then
		select * from nacionalidad where activo = 1 and nacionalidad.id = idNacionalidad;
	END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_crud_vacunas`(
	IN opcion INT, 
    IN descrip varchar(255),
    in act bool,
    in idVacunas int,
    IN usuario int)
BEGIN
	IF opcion = 1 THEN
		select * from vacunas where activo = 1;
	elseif opcion = 2 then
		insert into vacunas(descripcion, usuariocreacion)
        values(descrip, usuario);
	elseif opcion = 3 then
		update vacunas set
        descripcion = ifnull(descrip,descripcion),
        activo = ifnull(act, activo),
        usuarioModificacion = usuario,
        fechaModificacion = current_timestamp
        where vacunas.id = idVacunas;
	elseif opcion = 4 then
		update vacunas set
        activo = 0,
        usuarioModificacion = usuario,
        fechaModificacion = current_timestamp
        where vacunas.id = idVacunas;
	elseif opcion = 5 then
		select * from vacunas where activo = 1 and vacunas.id = idVacunas;
	END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_crud_usuario`(
	IN opcion INT, 
    IN nameUsuario varchar(255),
    IN emailUsuario varchar(255),
    IN nombreUsuario varchar(500),
    IN apellidoUsuario varchar(500),
    IN fechaNacimientoUsuario date,
    IN edadUsuario int,
    in activoUsuario bool,
    in id int,
    IN usuario int)
BEGIN
	IF opcion = 1 THEN
		select * from usuario where activo = 1;
	elseif opcion = 2 then
		insert into usuario(
        username,
        email,
        nombre,
        apellido,
        fechaNacimiento,
        edad,
        usuarioCreacion
        )
        values(
        nameUsuario,
        emailUsuario,
        nombreUsuario,
        apellidoUsuario,
        fechaNacimientoUsuario,
        edadUsuario,
        usuario
        );
	elseif opcion = 3 then
		update usuario set
        username = ifnull(nameUsuario,username),
        email = ifnull(emailUsuario,email),
        nombre = ifnull(nombreUsuario,nombre),
        apellido = ifnull(apellidoUsuario,apellido),
        fechaNacimiento = ifnull(fechaNacimientoUsuario,fechaNacimiento),
        edad = ifnull(edadUsuario,edad),
        activo = ifnull(activoPropietario, activo),
        usuarioModificacion = usuario,
        fechaModificacion = current_timestamp
        where usuario.id = id;
	elseif opcion = 4 then
		update usuario set
        activo = 0,
        usuarioModificacion = usuario,
        fechaModificacion = current_timestamp
        where usuario.id = id;
	elseif opcion = 5 then
		select * from usuario where activo = 1 and usuario.id = id;
	END IF;
END$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_crud_ubigeo`(
	IN opcion INT, 
    IN ubigeoUbigeo varchar(255),
    IN ubicacionUbigeo varchar(255),
    in activoUbigeo bool,
    in idUbigeo int,
    IN usuario int)
BEGIN
	IF opcion = 1 THEN
		select * from usuario where activo = 1;
	elseif opcion = 2 then
		insert into usuario(
        ubigeo,
        ubicacion,
        usuarioCreacion
        )
        values(
		ubigeoUbigeo,
        ubicacionUbigeo,
        usuario
        );
	elseif opcion = 3 then
		update ubigeo set
        ubigeo = ifnull(ubigeoUbigeo,ubigeo),
        ubicacion = ifnull(ubicacionUbigeo,ubicacion),
        activo = ifnull(activoUbigeo, activo),
        usuarioModificacion = usuario,
        fechaModificacion = current_timestamp
        where ubigeo.id = idUbigeo;
	elseif opcion = 4 then
		update ubigeo set
        activo = 0,
        usuarioModificacion = usuario,
        fechaModificacion = current_timestamp
        where ubigeo.id = idUbigeo;
	elseif opcion = 5 then
		select * from ubigeo where activo = 1 and ubigeo.id = idUbigeo;
	END IF;
END$$
DELIMITER ;
