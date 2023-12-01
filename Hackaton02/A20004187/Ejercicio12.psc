//12. Hacer un algoritmo en Pseint que lea dos números y diga cuál es el mayor.

Algoritmo Ejercicio12
	Definir a,b Como Entero
	Escribir "Ingrese el 1er número: ";
    Leer a;
    Escribir "Ingresa el 2do número: ";
    Leer b;
	
    mayor <- a;
    Si mayor < b Entonces
        mayor <- b;
    FinSi
	
    Escribir "El número mayor es: ", mayor;
	
FinAlgoritmo