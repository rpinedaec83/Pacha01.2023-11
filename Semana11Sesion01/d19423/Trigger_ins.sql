DELIMITER $$
CREATE TRIGGER tr_mascota_ins
AFTER INSERT ON Mascota
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
(NEW.id,
NEW.Nombre,
NEW.fechaNacimiento,
NEW.idEspecie,
NEW.idRaza,
NEW.idSexo,
NEW.idPropietario,
NEW.activo,
NEW.usuarioCreacion,
NEW.fechaCreacion,
NEW.usuarioModificacion,
NEW.fechaModificacion,
'I',
CURRENT_USER() );



END;$$