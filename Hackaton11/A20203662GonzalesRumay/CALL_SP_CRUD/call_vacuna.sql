CALL sp_crud_vacunas(1, NULL, NULL, NULL, NULL);
CALL sp_crud_vacunas(2, 'Vacuna contra la rabia', 1, NULL, 1);
CALL sp_crud_vacunas(3, 'Vacuna Quintuple', 1, 2, 1);
CALL sp_crud_vacunas(4, NULL, NULL, 3, 1);
CALL sp_crud_vacunas(5, NULL, NULL, 2, NULL);
