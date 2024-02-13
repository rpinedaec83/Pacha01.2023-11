-- Tabla bckubigeo
call sp_crud_bckubigeo(1, null, null, 1, null);
call sp_crud_bckubigeo(2, '125', 'LOS OLIVOS', 1, 1);
call sp_crud_bckubigeo(3, '212', 'ATE VITARTE', 1, 1);
call sp_crud_bckubigeo(4, '125', null, null, null);
-- Tabla mascota 
call sp_crud_mascota(1, null, null, null, null, null, null, null, 1, null);
call sp_crud_mascota(2, 1, 'Sasy', '2024-02-07', 1, 1, 1, 1, 1, 1);
call sp_crud_mascota(3, 2, 'Rambo', '2024-02-07', 1, 1, 1, 1, 1, 1);
call sp_crud_mascota(4, 25, null, null, null, null, null, null, null, null);
-- Tabla mascota log 
call sp_crud_log_mascota(1, null, null, null, null, null, null, null, 1, null);
call sp_crud_log_mascota(2, 41, 'Loisa', '2024-02-07', 1, 1, 1, 1, 1, 1);
call sp_crud_log_mascota(3, 40, 'Sasy', '2024-02-07', 2, 2, 2, 2, 1, 1);
call sp_crud_log_mascota(4, 1, null, null, null, null, null, null, null, null);
-- Tabla nacionalidad 
call sp_crud_nacionalidad(1, null, 1, null, null);
call sp_crud_nacionalidad(2, 'Malaga', 1, null, 1);
call sp_crud_nacionalidad(3, 'Español', true, 4, 1);
CALL sp_crud_nacionalidad(4, '', null, 1, null);
-- Tabla propietario
call sp_crud_propietario(1, null, null, null,null, null, null, 1, null, null);
call sp_crud_propietario(2, 'Luis', 'Capcha', 'Cuzco 152', '965253654', 1, '123521', 1, null, 1);
call sp_crud_propietario(3, 'Maria', 'Cardenadas', 'Salvatierra', '9653251253', 1, '125420', null, 1, 1);
call sp_crud_propietario(4, null, null,null,null, null, null, null, 1, null);


