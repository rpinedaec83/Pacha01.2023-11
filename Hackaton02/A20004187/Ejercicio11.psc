//11. Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.

Algoritmo Ejercicio11
	Definir a,b,c Como Entero
	Escribir "Ingrese el 1er número:";
    Leer a;
    Escribir "Ingresa el 2do número:";
    Leer b;
    Escribir "Ingresa el 3er número:";
    Leer c;
    mayor <- a;
    Si mayor < b Entonces
        mayor <- b;
    FinSi
    Si mayor < c Entonces
        mayor <- c;
    FinSi
    Escribir "El numero mayor es: ", mayor;
	
FinAlgoritmo