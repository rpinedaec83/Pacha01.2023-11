delete from Mascota where id = 3;

select * from Mascota;

update Mascota set fechaNacimiento = '2022-07-01', usuarioModificacion = 1, fechaModificacion= CURRENT_TIMESTAMP where id = 3; 


INSERT INTO Mascota_log
SELECT * FROM Mascota;

INSERT INTO `veterinaria`.`Mascota`
(
`Nombre`,
`fechaNacimiento`,
`idEspecie`,
`idRaza`,
`idSexo`,
`idPropietario`,
`usuarioCreacion`)
VALUES
('Selina', '2021-05-01', 1, 1, 1, 1, 1);

select * from Mascota;

select * from Mascota_log;

