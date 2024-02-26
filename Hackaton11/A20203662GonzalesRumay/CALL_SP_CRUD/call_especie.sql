CALL sp_crud_especie(1, NULL, NULL, NULL, NULL);
CALL sp_crud_especie(2, 'Felis catus', NULL, NULL, 1);
CALL sp_crud_especie(3, 'Canis lupus', 1, 2, 1);
CALL sp_crud_especie(4, NULL, NULL, 3, 1);
CALL sp_crud_especie(5, NULL, NULL, 2, NULL);
