CALL sp_crud_ubigeo(1, NULL, NULL, NULL, NULL, NULL);
CALL sp_crud_ubigeo(2, '150101', 'Lima Centro', NULL, NULL, 1);
CALL sp_crud_ubigeo(3, NULL, 'Lima Provincias', 1, 2, 1);
CALL sp_crud_ubigeo(4, NULL, NULL, NULL, 3, 1);
CALL sp_crud_ubigeo(5, NULL, NULL, NULL, 2, NULL);
