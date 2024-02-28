CALL sp_crud_raza(1, NULL, NULL, NULL, NULL, NULL, NULL);
CALL sp_crud_raza(2, "Labrador Retriever", 1, "Descripción de Labrador Retriever", NULL, NULL, 1);
CALL sp_crud_raza(3, 'Golden Retriever', 1, 'Descripción del Golden Retriever', 1, 2, 1);
CALL sp_crud_raza(4, NULL, NULL, NULL, 0, 3, 1);
CALL sp_crud_raza(5, NULL, NULL, NULL, NULL, 4, 1);
