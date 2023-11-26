//9. Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, 
//se debe tomar en cuenta que si ganaba m�s de $2000 tendr� un aumento del 5%, si generaba menos de
//$2000 su aumento ser� de un 10%.

Algoritmo  Ejercicio9
	Escribir Sin Saltar "Ingrese el sueldo que ganaba:";
    Leer sueldo;
    incremento <- 0;
    Si sueldo>2000 Entonces
        incremento <- sueldo*0.5;
    FinSi
	Si sueldo<2000 Entonces
        incremento <- sueldo*0.10;
    FinSi
    nuevo_sueldo <- sueldo+incremento;
    Escribir "Incremento en el sueldo: ", incremento;
    Escribir "Sueldo : ", nuevo_sueldo;
	
	
FinAlgoritmo

