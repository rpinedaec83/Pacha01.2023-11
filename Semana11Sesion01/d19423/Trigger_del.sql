DELIMITER $$
CREATE TRIGGER tr_mascota_del
AFTER delete ON Mascota
FOR EACH ROW
BEGIN
INSERT INTO `veterinaria`.`Mascota_log`
(`id`,
`Nombre`,
`fechaNacimiento`,
`idEspecie`,
`idRaza`,
`idSexo`,
`idPropietario`,
`activo`,
`usuarioCreacion`,
`fechaCreacion`,
`usuarioModificacion`,
`fechaModificacion`,
`operacion`,
`usuario`)
VALUES
(OLD.id,
OLD.Nombre,
OLD.fechaNacimiento,
OLD.idEspecie,
OLD.idRaza,
OLD.idSexo,
OLD.idPropietario,
OLD.activo,
OLD.usuarioCreacion,
OLD.fechaCreacion,
OLD.usuarioModificacion,
OLD.fechaModificacion,
'D',
CURRENT_USER() );



END;$$