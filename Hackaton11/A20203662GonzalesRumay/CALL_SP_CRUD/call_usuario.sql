CALL sp_crud_usuario(1, NULL, NULL, NULL, NULL, NULL);
CALL sp_crud_usuario(2, 'Juan Perez', 'juanperez@eyahoo.com', NULL, NULL, 1);
CALL sp_crud_usuario(3, "Juan Perez. Actualizado", "juanperez345@gmail.com", 1, 3, 1);
CALL sp_crud_usuario(4, NULL, NULL, 0, 3, 1);
CALL sp_crud_usuario(5, NULL, NULL, NULL, 3, 1);
