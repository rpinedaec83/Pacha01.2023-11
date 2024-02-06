call sp_crud_especie(1,null,null,null,null); /* ver tabla*/
call sp_crud_especie(2,'Cabra',null,null,1);/* (INSERT)insertar nuevo dato a la tabla*/
call sp_crud_especie(3,'Borrego',null,9,1);/*cambiar datos de tabla */
call sp_crud_especie(4,null,null,9,1);/* borrar datos de la tabla*/
call sp_crud_especie(5,null,null,7,1);/* saber dato de 1 documento o registro*/