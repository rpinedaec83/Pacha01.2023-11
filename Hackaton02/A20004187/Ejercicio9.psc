//9. Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, 
//se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de
//$2000 su aumento será de un 10%.

Algoritmo  Ejercicio9
	Escribir Sin Saltar "Ingrese el sueldo que ganaba:";
    Leer sueldo;
    incremento = 0;
    Si sueldo>2000 Entonces
        incremento = sueldo*0.05;
    FinSi
	Si sueldo<=2000 Entonces
        incremento = sueldo*0.10;
    FinSi
    nuevo_sueldo = sueldo+incremento;
    Escribir "Incremento en el sueldo: ", incremento;
    Escribir "Sueldo actualizado: ", nuevo_sueldo;
	
	
FinAlgoritmo

