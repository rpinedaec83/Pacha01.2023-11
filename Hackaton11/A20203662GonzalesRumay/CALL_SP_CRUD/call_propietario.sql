CALL sp_crud_propietario(1, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
CALL sp_crud_propietario(2, 'Juan Pérez', 'Calle Faisanes 123', '555-1234', 'juanperez@eyahoo.com', NULL, NULL, 1);
CALL sp_crud_propietario(3, "Juan Pérez. Actualizado", "Calle Real 456", "555-5678", "juanperez@eyahoo.com", 1, 3, 1);
CALL sp_crud_propietario(4, NULL, NULL, NULL, NULL, 0, 3, 1);
CALL sp_crud_propietario(5, NULL, NULL, NULL, NULL, NULL, 2, 1);
