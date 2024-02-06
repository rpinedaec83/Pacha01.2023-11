CALL sp_crud_vacunas(1, null, null, null, null);
CALL sp_crud_vacunas(2, 'Nueva Vacuna', true, null, 1);
CALL sp_crud_vacunas(3, 'Vacuna Modificada', true, 8, 1);
CALL sp_crud_vacunas(4, null, null, 9, 1);
CALL sp_crud_vacunas(5, null, null, 3, null);